import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ContactBook from "@material-ui/icons/LibraryBooksOutlined";
import UserIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  actionItemStyles: {
    "&$selected": {
      color: "black",
    },
  },
  // This is required for the '&$selected' selector to work
  selected: {},
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={classes.stickToBottom}>
      {<BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.actionItemStyles}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          classes={{
            root: classes.actionItemStyles,
            selected: classes.selected,
          }}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/contacts"
          classes={{
            root: classes.actionItemStyles,
            selected: classes.selected,
          }}
          icon={<ContactBook />}
        />
        <BottomNavigationAction
          component={Link}
          to="/notifications"
          classes={{
            root: classes.actionItemStyles,
            selected: classes.selected,
          }}
          icon={<NotificationsNoneIcon />}
        />
        <BottomNavigationAction
          classes={{
            root: classes.actionItemStyles,
            selected: classes.selected,
          }}
          icon={<UserIcon />}
        />
      </BottomNavigation>}
    </div>
  );
}
