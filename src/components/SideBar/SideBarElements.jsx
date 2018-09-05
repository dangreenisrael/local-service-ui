import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  listIcon: {
    width: "30px"
  }
};

export default function SideBarElements({ changeIFrame }) {
  return (
    <List>
      <ListItem onClick={changeIFrame("http://192.168.1.123:9091")} button>
        <ListItemIcon style={styles.listIcon}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Transmission_Icon.svg"
            alt="Transmission"
          />
        </ListItemIcon>
        <ListItemText primary="Transmission" />
      </ListItem>
      <ListItem onClick={changeIFrame("http://192.168.1.123:32400")} button>
        <ListItemIcon style={styles.listIcon}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Antu_plexhometheater.svg/512px-Antu_plexhometheater.svg.png"
            alt="Plex"
          />
        </ListItemIcon>
        <ListItemText primary="Plex" />
      </ListItem>
      <ListItem onClick={changeIFrame("http://192.168.1.123:8081")} button>
        <ListItemIcon style={styles.listIcon}>
          <img
            src="https://pbs.twimg.com/profile_images/1288187778/head_400x400.png"
            alt="SickBeard"
          />
        </ListItemIcon>
        <ListItemText primary="SickBeard" />
      </ListItem>
    </List>
  );
}
