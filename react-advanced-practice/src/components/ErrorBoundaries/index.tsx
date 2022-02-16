/* eslint-disable react/prop-types */
import React, { ErrorInfo, ReactNode } from 'react';

type MyProps = {
  children: ReactNode;
};
type MyState = {
  error: string;
  errorInfo: string;
};

class ErrorBoundary extends React.Component {
  constructor(props: MyProps) {
    super(props);
  }

  state: MyState = { error: '', errorInfo: '' };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <pre className="mt-3">{this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
