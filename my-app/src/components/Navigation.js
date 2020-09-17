import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import { HOME, ABOUT, POST, PROJECT } from "../controller/nav-controller";

//navigation button
const HeaderItem = ({ title, actionFn }) => {
  return (
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={actionFn}>
      <Typography variant="h5">{title}</Typography>
    </Button>
  );
};

const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "#624a59",
    padding: "2vh 0 2vh 0.5vw",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navContent: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  rightHeaderMenu: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
    textColor: "#ffe9ef",
  },
  headerhome: {
    color: "#ffe9ef",
    marginLeft: "2vw",
  },
}));

const Navigation = (props) => {
  const classes = navStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div />
    </div>
  );
  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid container justify="space-between">
              <Grid
                className={`${classes.logo} logo-container`}
                item
                xs={12}
                sm={12}
                md={3}
              >
                <Typography
                  variant="h3"
                  style={{ color: "#ffe9ef", marginLeft: "2vw" }}
                >
                  Cá
                </Typography>
              </Grid>
              <Grid className={classes.navContent} item xs={9} sm={12} md={6}>
                <Box className={classes.rightHeaderMenu}>
                  <HeaderItem
                    title="Home"
                    className={classes.headerhome}
                    actionFn={() => setParentDisplay(HOME)}
                  />
                  <HeaderItem
                    title="About Me"
                    actionFn={() => setParentDisplay(ABOUT)}
                  />
                  <HeaderItem
                    title="Projects"
                    actionFn={() => setParentDisplay(PROJECT)}
                  />
                  <HeaderItem
                    title="Posts"
                    actionFn={() => setParentDisplay(POST)}
                  />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <nav>
          <Hidden>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
