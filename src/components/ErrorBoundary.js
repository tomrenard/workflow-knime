import React, { Component } from "react";

// Please find here a common ErrorBoundary class component in React, it should encapsulate any component where we want to handle this kind of errors, and it will block the rendering if it fires

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <a href="/">Click here</a> to go
          back to the homepage.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
