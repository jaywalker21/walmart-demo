import React, { Component } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // API CALL to Error Reporting service
    // 
  }

  render() {
    console.log("cme to error boundary")
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. Please contact administrator</h1>;
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;