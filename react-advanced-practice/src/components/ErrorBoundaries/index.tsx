import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

type MyProps = {
  children: ReactNode;
};
type MyState = {
  hasError: boolean;
  error: string;
};
class ErrorBoundary extends React.Component {
  static propTypes: { children: PropTypes.Requitable<any> };
  constructor(props: MyProps) {
    super(props);
  }

  state: MyState = { hasError: false, error: '' };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error: error.toString()
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <pre className="mt-3">{this.state.error}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.element
};
