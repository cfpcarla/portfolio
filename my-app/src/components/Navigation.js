import React, { useState } from "react";
import logo from "../assets/logo.png";
import ca2 from "../assets/ca2.png";
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

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import PostAddIcon from "@material-ui/icons/PostAdd";

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
    backgroundColor: "#fbeaeb",
    padding: "2vh 0 2vh 0.5vw",
    justifyContent: "space-between",
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
  headerItem: {
    position: "absolute",
  },
  box: {
    height: "40px",
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
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>

          <HeaderItem title="Home" actionFn={() => setParentDisplay(HOME)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>

          <HeaderItem
            title="About Me"
            actionFn={() => setParentDisplay(ABOUT)}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>

          <HeaderItem
            title="Projects"
            actionFn={() => setParentDisplay(PROJECT)}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>

          <HeaderItem title="Posts" actionFn={() => setParentDisplay(POST)} />
        </ListItem>
      </List>
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
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="space-between">
              <Grid
                className={`${classes.logo} logo-container`}
                item
                xs={12}
                sm={12}
                md={3}
              ></Grid>
              <Grid className={classes.navContent} item xs={9} sm={12} md={6}>
                <Box className={classes.rightHeaderMenu}>
                  <HeaderItem
                    title="Home"
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

//   return (
//     <React.Fragment>
//       <div className={classes.root}>
//         <Grid container justify="space-between">
//           <Grid className={`${classes.logo} logo-container`} item xs={12}>
//             <AppBar position="static" className={classes.appBar}>
//               <Toolbar>
//                 <Box className={classes.rightHeaderMenu}>
//                   <HeaderItem
//                     title="Home"
//                     className={classes.headerItem}
//                     actionFn={() => setParentDisplay(HOME)}
//                   />
//                   <HeaderItem
//                     title="About Me"
//                     actionFn={() => setParentDisplay(ABOUT)}
//                   />
//                   <HeaderItem
//                     title="Projects"
//                     actionFn={() => setParentDisplay(PROJECT)}
//                   />
//                   <HeaderItem
//                     title="Posts"
//                     actionFn={() => setParentDisplay(POST)}
//                   />
//                 </Box>
//               </Toolbar>
//             </AppBar>
//           </Grid>
//         </Grid>
//         <nav>
//           <Hidden>
//             <Drawer
//               container={container}
//               variant="temporary"
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               ModalProps={{
//                 keepMounted: true,
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//         </nav>
//       </div>
//     </React.Fragment>
//   );
// };

export default Navigation;
