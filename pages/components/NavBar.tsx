import styles from "../../styles/Home.module.css";
import { Box, AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

export default function NavBar(props): JSX.Element {
    return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px", height: "75px"}}>
      <AppBar position="static"
        sx={{
            height: "75px",
            justifyContent: "center",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ margin: 'auto'}}>
            {props.title}
          </Typography>
          <Button 
          variant="text" 
          color="inherit" 
          href="/auth"
          endIcon={<LoginIcon />}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

