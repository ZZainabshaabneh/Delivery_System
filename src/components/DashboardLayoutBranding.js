import { AppProvider } from "@toolpad/core";
import { createTheme } from "@mui/material/styles";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useNavigate } from "react-router-dom";  

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
  },
  {
    segment: 'orders',
    title: 'Orders',
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
});

export function DashboardLayoutBranding() {
  const navigate = useNavigate();  

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="/static/images/S9.png" alt="MUI logo" />,
        title: 'Delivery System',
      }}
      theme={demoTheme}
    >
      <DashboardLayout>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => navigate('/')}>Home</a> 
            </li>
            <li>
              <a href="#" onClick={() => navigate('/signin')}>Sign In</a> 
            </li>
            <li>
              <a href="#" onClick={() => navigate('/dashboard')}>Dashboard</a>
            </li>
          </ul>
        </nav>
      </DashboardLayout>
    </AppProvider>
  );
}
