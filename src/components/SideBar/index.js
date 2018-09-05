import React from "react";
import Drawer from "@material-ui/core/Drawer";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import SideBarElements from "./SideBarElements";
const drawerWidth = 200;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});

const SideBar = ({ classes, isOpen, onToggle, changeIFrame }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(
        classes.drawerPaper,
        !isOpen && classes.drawerPaperClose
      )
    }}
    open={isOpen}
  >
    {/* <div className={classes.toolbar}>
      <IconButton onClick={onToggle}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider /> */}
    <SideBarElements changeIFrame={changeIFrame} />
  </Drawer>
);

export default withStyles(styles, { withTheme: true })(SideBar);
