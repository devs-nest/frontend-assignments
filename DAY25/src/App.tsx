import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import React, { useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { UserRefType, UnsubscribeType, UserType } from "./AppTypes";

import ErrorBoundary from "./components/ErrorBoundary";

const HomePage = lazy(() => import("./pages/homepage"));
const ShopPage = lazy(() => import("./pages/shop"));
const Auth = lazy(() => import("./pages/auth"));
const Checkout = lazy(() => import("./pages/checkout"));

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    let unsubscribeFromAuth: UnsubscribeType = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef: UserRefType = await createUserProfileDocument(userAuth);

        userRef!.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [setCurrentUser]);

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
                render={() => (currentUser ? <Redirect to="" /> : <Auth />)}
              />
              <Route path="/checkout" component={Checkout} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
