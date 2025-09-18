import { AppBar, styled, Toolbar, Typography, Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const AppToolbar = () => {
  const StyledLink = styled(Link)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'inherit',
    },
  });

  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          <StyledLink to={'/'}>CompStore</StyledLink>
        </Typography>
        <Button component={NavLink} to={'/register'} color="inherit">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
