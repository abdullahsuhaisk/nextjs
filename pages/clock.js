import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../store";
import Examples from "../components/examples";

class Clock extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));
    console.log(!!req);

    return {};
  }

  componentDidMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    this.timer = () => startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Examples />;
  }
}

export default connect()(Clock);
