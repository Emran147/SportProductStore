import React, { useState,useEffect } from 'react';
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
    maxWidth: 345,
    marginTop: 15,
    marginRight: 15,
  },
  media: {
    height: 140,
  },
}));

function Running(props) {
  useEffect(() => {
    var activeuser = JSON.parse(sessionStorage.getItem("activeuser"))
    if (activeuser == null || activeuser == undefined) {
      window.location.replace("/");
    }
  })
  const [cart, setCart] = useState(props.cart)
  const [prop, setprop] = useState(props)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function AddToCart(item) {
    var arr = cart;
    arr = [...arr, item];
    console.log(arr);
    setCart(arr);
    props.addItemToCart(item);
  }

  const menuId = 'primary-search-account-menu';


  console.log(props);
  return (

    <div style={{ backgroundColor: 'white', height: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => props.history.push({
            pathname: "/home"
          })}
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

            <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => props.history.push({
              pathname: "/cart"
            })}>
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={()=>{
                sessionStorage.removeItem("activeuser")
                props.history.push({
                  pathname:"/"
                })
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>


        <div>
          <Card className={classes.root} onClick={() => {

          }} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../Lletscom.png"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  LETSCOM
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  LETSCOM Smart Watch, GPS Running Watch Fitness Trackers with Heart Rate Monitor Step Counter Sleep Monitor 250$
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => AddToCart({ item: "LETSCOM", price: 250 })}>
                Buy
        </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../LsportCase.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sport case
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  TRIBE Water Resistant Cell Phone Armband Case for iPhone 5$
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => AddToCart({ item: "Sport case", price: 5 })}>
                Buy
        </Button>
            </CardActions>
          </Card>

        </div>
        <div>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../Lhands.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Running Casual Hands
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Enjoy Festival Sports Workout Traveling Running Casual Hands-Free Waist Pack Crossbody Phone Bag Carrying All Phones 8$
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => AddToCart({ item: "Running Casual Hands", price: 8 })}>
                Buy
        </Button>
            </CardActions>

          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../../shoes.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Running shoes
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Nike Air Zoom Alphafly NEXT% Flyknit for Running 300$
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => AddToCart({ item: "Running shoes", price: 300 })}>
                Buy
        </Button>
            </CardActions>
          </Card>

        </div>

      </div>

    </div>


  );
}
export default withRouter(Running)