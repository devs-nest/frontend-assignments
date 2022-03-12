import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import React, { useEffect, lazy, Suspense } from 'react'
import Header from './components/Header'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selectors'
import {
  UserRefType,
  UnsubscribeType,
  UserType
} from './AppTypes'

import ErrorBoundary from './components/ErrorBoundary'

const HomePage = lazy(() => import('./pages/homepage'))
const ShopPage = lazy(() => import('./pages/shop'))
const Auth = lazy(() => import('./pages/auth'))
const Checkout = lazy(() => import('./pages/checkout'))

interface Props {
  setCurrentUser: (currentUser: UserType) => void
  currentUser: UserType
}

const App: React.FC<Props> = ({
  setCurrentUser,
  currentUser
}) => {
  useEffect(
    () => {
      let unsubscribeFromAuth: UnsubscribeType = null
      unsubscribeFromAuth = auth.onAuthStateChanged(
        async (userAuth) => {
          if (userAuth) {
            const userRef: UserRefType = await createUserProfileDocument(
              userAuth
            )

            userRef!.onSnapshot((snapShot) => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              })
            })
          }

          setCurrentUser(userAuth)
        }
      )

      return () => {
        if (unsubscribeFromAuth) {
          unsubscribeFromAuth()
        }
      }
    },
    [ setCurrentUser ]
  )

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? (
                    <Redirect to="" />
                  ) : (
                    <Auth />
                  )}
              />
              <Route
                path="/checkout"
                component={Checkout}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  App
)
