import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Iframe from "react-iframe";
import SideBar from "./components/SideBar";

const styles = () => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    iframeUrl: "http://192.168.1.123:9091"
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleChangeIFrame = url => {
    return () => this.setState({ iframeUrl: url });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SideBar
          isOpen={this.state.open}
          onToggle={this.handleDrawerToggle}
          changeIFrame={this.handleChangeIFrame}
        />
        <Iframe
          url={this.state.iframeUrl}
          width="100%"
          height="100%"
          id="main-iframe"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
