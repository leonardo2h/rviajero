import { withRouter } from 'react-router';
import { Component } from 'react';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location: pathname } = this.props;

    if (pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
