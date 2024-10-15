import './App.css';

import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, Paper, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'; 
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import { DashboardLayout } from '@toolpad/core/DashboardLayout';

const providers = [{ id: 'credentials', name: 'Email and password' }];


const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const email = formData?.get('email');
      const password = formData?.get('password');
      alert(
        `Signing in with "${provider.name}" and credentials: ${email}, ${password}`,
      );
       resolve({
        type: 'CredentialsSignin',
        error: 'Invalid credentials.',
      });
     }, 300);
  });
  return promise;
};




export   function NotificationsSignInPageError() {
  const theme = useTheme();
  return (
  <>
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
   </>
  );
}




const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];




const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});




function DemoPageContent() {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
       <Typography><NotificationsSignInPageError/></Typography>
    </Box>
  );
}




DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};




export function DashboardLayoutBranding(props) {
  const { window } = props;




  const [pathname, setPathname] = React.useState('/dashboard');




  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);




   const demoWindow = window !== undefined ? window() : undefined;




  return (
     <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="/static/images/S9.png" alt="MUI logo" />,
        title: 'Delivery System',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
   );
}




 DashboardLayoutBranding.propTypes = {
   
  window: PropTypes.func,
};

function DeliverySystem() {
  return (
    <>
    <div>
    
      <AppBar position="static" style={{ backgroundColor: '#046E63' }}>
        <Toolbar>
          <img src="/static/images/S9.png" alt="logo" style={{ height: 50, marginRight: '20px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Delivery system
          </Typography>
          <Button color="inherit" startIcon={<HomeIcon />} href="#">
            Home
          </Button>
          <Button color="inherit" href="#">Services</Button>
          <Button color="inherit" href="#">Contact us</Button>
          <Button color="inherit" variant="outlined" href="#">Log In</Button>
        </Toolbar>
      </AppBar>

      
      <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h2">
              Fast, Reliable Delivery
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              We provide the best delivery service that ensures your package arrives on time and in perfect condition.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/static/images/S1.png" alt="delivery service" style={{ width: '100%' }} />
          </Grid>
        </Grid>
        <Box textAlign="center" marginTop="20px">
          <Button variant="contained" color="warning" size="large">
            Order
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Paper elevation={3} style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2024 Advanced Delivery System. All Rights Reserved
          </Typography>
          <Box textAlign="center" marginTop="10px">
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InsertPhotoIcon />  
            </IconButton>
          </Box>
        </Container>
      </Paper>
      </div>
      </>
  );
}

export default DeliverySystem;
