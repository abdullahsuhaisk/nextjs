import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../store";
import Examples from "../components/examples";

class Clock extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    console.log(!!req, reduxStore);

    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = () => startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props);

    return <Examples />;
  }
}

export default connect(null)(Clock);
