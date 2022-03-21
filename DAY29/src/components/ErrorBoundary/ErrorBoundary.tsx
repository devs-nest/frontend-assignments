import React from 'react'

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  }
  static getDerivedStateFromError(error) {
    // process error
    return { hasErrored: true }
  }

  componentDidCatch(error) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return <div>Something went wrong!</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
