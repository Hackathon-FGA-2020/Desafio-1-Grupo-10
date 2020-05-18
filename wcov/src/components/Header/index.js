import React from 'react'

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import HomeIcon from '@material-ui/icons/Home';

import {useStyles} from './styles'

export default function Header({children}) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const url = 'http://www.saude.df.gov.br/coronavirus/';

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
		})}
		style={{background: "#E91E63"}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
		className={classes.drawer}
		position="absolute"
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

        <Link className={classes.linkText} to="/" >
          <ListItem button >
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
                
          </ListItem>
        </Link>

        <Link className={classes.linkText} to="/mapeamento-de-casos" >
          <ListItem button >
              <ListItemIcon><MapIcon /></ListItemIcon>
              <ListItemText primary="Mapeamento de casos" />
          </ListItem>
        </Link>

        <Link className={classes.linkText} to="/cuidados" >
          <ListItem button >
                <ListItemIcon><HealingIcon /></ListItemIcon>
                <ListItemText primary="Cuidados" />
          </ListItem>
        </Link>

        <Link className={classes.linkText} to="/atendimentos" >
          <ListItem button >
              <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
              <ListItemText primary="Atendimentos" />
          </ListItem>
        </Link>

        <Link className={classes.linkText} to="/ajuda">
          <ListItem button >
                <ListItemIcon><MoodBadIcon /></ListItemIcon>
                <ListItemText primary="Procurando ajuda" />
          </ListItem>
        </Link>

        </List>
        <Divider />
        <List>

        <ListItem button onClick = {() => window.open(url)}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Mais informações" />
        </ListItem>

        <Link className={classes.linkText} to="/sobre" >
          <ListItem button >
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="Sobre"/>
                
          </ListItem>
        </Link>

        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>

    </div>
  );
}
