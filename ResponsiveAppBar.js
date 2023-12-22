// ResponsiveAppBar.js
import * as React from 'react';
import './ResponsiveAppBar.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Footer from './Footer';

const pages = ['Home', 'Products', 'About Us', 'Contact Us'];
const settings = ['Profile', 'Account', 'Order History', 'Logout'];

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 200,
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: '#e0e0e0',
  fontSize: '20px',
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div className='body'>
      <div >
    <div>
    <AppBar position="fixed" style={{backgroundColor:'rgb(69,139,162)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              
            }}
          >
           <img src="data:image/png;base64,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"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            People
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color:'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <div className='btn'>
          <Button variant="outlined" className='btn1'><Link to='/Login'>LOGIN</Link></Button>
          <Button variant="outlined" className='btn1'><Link to='/Signup'>SIGNUP</Link></Button>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" />             
               </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
      <div><br /><br /><br />
        <br/>
        <h1>Welcome to GLAM-MART!!</h1>
        <br/>
        <h1>Discover Beauty with Our Cosmetic Collection</h1><br />
        <p>Explore our wide range of cosmetic products that enhance your beauty and confidence. From skincare essentials to vibrant makeup, we have it all.</p>
        

        <br /><br /><br /><br /><br /><center><b>Some Collections</b></center>
      </div><br />

      <div className='col'>
        <div className='car'>
          <Card sx={{ width: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://i.pinimg.com/564x/2c/60/97/2c60974fc65af811c079e7b2e10c3a6c.jpg"
                alt="Lipstick Product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lipsticks Collection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                Adorn your lips with our exquisite lipstick collection, featuring a spectrum of rich pigments and a velvety texture that adds a touch of luxury to your statement-making pout. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='car'>
    <Card sx={{ width:270  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://i.pinimg.com/236x/e8/ed/10/e8ed10126e1a29b688bab00b102874a1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Makeup Brushes
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Elevate your lips with a luxe selection of lipsticks, boasting rich pigments and a velvety texture. Experience nourishing formulas that complement your style, ensuring your lips stay glamorous throughout the day.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='car'>
    <Card sx={{ width: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://i.pinimg.com/236x/95/7b/5c/957b5cf55705eb662c2f51ae15295da1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Eye Shadows
          </Typography>
          <Typography variant="body2" color="text.secondary">

          Transform your eye makeup with a vibrant spectrum of eyeshadow shades, expertly crafted for intense pigmentation and effortless blending, creating captivating and mesmerizing eye looks.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    
</div>
      </div>

      <div className='pap'>
        <Stack direction="row" spacing={4}>
          <DemoPaper variant="elevation"><TableRowsRoundedIcon /><br />Browse through our diverse product range</DemoPaper>
          <DemoPaper variant="elevation"><GppGoodOutlinedIcon /><br />Quality assurance and product satisfaction</DemoPaper>
          <DemoPaper variant="elevation"><SettingsSuggestOutlinedIcon /><br />Personalize your beauty routine with our cosmetics</DemoPaper>
          <DemoPaper variant="elevation"><ContactsOutlinedIcon /><br />Connect with us for any inquiries or assistance</DemoPaper>
          <DemoPaper variant="elevation"><MobileFriendlyOutlinedIcon /><br />Shop conveniently from your mobile device</DemoPaper>
        </Stack>
      </div>

      <Footer />
    </div>
    </div>
  );
}

export default ResponsiveAppBar;










