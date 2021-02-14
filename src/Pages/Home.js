import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SportsMmaSharpIcon from '@material-ui/icons/SportsMmaSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    maxWidth: 500,


  },
  media: {
    height: 320,

  },
}));

function Home(props) {


  const menuId = 'primary-search-account-menu';

  const classes = useStyles();

  useEffect(() => {
    var activeuser = JSON.parse(sessionStorage.getItem("activeuser"))
    if (activeuser == null || activeuser == undefined) {
      window.location.replace("/");
    }
  })

  return (

    <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SportsMmaSharpIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            E&M
          </Typography>


          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <IconButton color="inherit" onClick={() => props.history.push({
              pathname: "/cart"
            })}>
              <Badge badgeContent={props.cart.length} color="secondary" >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => {
                sessionStorage.removeItem("activeuser")
                props.history.push({
                  pathname: "/"
                })
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      <div style={{ top: '1000', bottom: '100', display: 'flex', justifyContent: 'center', backgroundColor: "black" }}

      >

        <div style={{ float: "left", width: 400 }} >
          <Card className={classes.root} onClick={() => {
            props.history.push({
              pathname: "/seq"
            })
          }} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../schooleq.png"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  School Equipments
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p"  >
                  <b>   Everything that you could ask for school equipments.</b>
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
          <Card className={classes.root} onClick={() => {


            props.history.push({
              pathname: "/Running"
            })
          }}>
            <CardActionArea style={{ maxHeight: 500 }}>
              <CardMedia
                className={classes.media}
                image="../../RunningPic.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Running
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Everything that could help while running.
          </Typography>
              </CardContent>
            </CardActionArea>

          </Card>

        </div>
        <div style={{ float: "left", width: 400 }}>

          <Card className={classes.root} onClick={() => {


            props.history.push({
              pathname: "/Treademils"
            })
          }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../gelmaster.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Trademills
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Treadmils helps you to have a healthy body
          </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
          <Card className={classes.root} onClick={() => {


            props.history.push({
              pathname: "/Machines"
            })
          }} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../machines.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Machines
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Machines that can help you to stay fit and heathy
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </div>
        <div style={{ float: "left", width: 400 }}>

          <Card className={classes.root} onClick={() => {


            props.history.push({
              pathname: "/Elepticals"
            })
          }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../test3.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Elepticals
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  elepticals makes ur body fit!!!!
          </Typography>
              </CardContent>
            </CardActionArea>

          </Card>

          <Card className={classes.root} onClick={() => {


            props.history.push({
              pathname: "/Outdoor"
            })
          }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../Ltry.jpg"
                title="Contemplative Reptile"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Outdoor Sports
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Going out for a sport can be good for your mental health
          </Typography>
              </CardContent>
            </CardActionArea>

          </Card>

        </div>

      </div>

    </div>


  );
}
export default withRouter(Home)