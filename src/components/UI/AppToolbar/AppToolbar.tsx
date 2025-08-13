import {AppBar, styled, Toolbar, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const AppToolbar = () => {
  const StyledLink = styled(Link)({
    color: "inherit",
    textDecoration: "none",
    '&:hover': {
      color: "inherit"
    }
  });

  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <StyledLink to={'/'}>CompStore</StyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;