import React from "react";
import "./HeaderStyle.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      border: "2.0px solid white",
    },
  })
);

export default function App() {
  const classes = useStyles();
  let salmon = "#FF7254";
  return (
    <div>
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Logo">
            <span role="img" aria-label="logo">
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </span>
          </div>
          <div className="Title"> Kevin Cooper </div>
          <div className="Icon">
            <AccountCircleIcon style={{ fontSize: 40, color: salmon }} />
          </div>
        </div>
      </header>
    </div>
  );
}
