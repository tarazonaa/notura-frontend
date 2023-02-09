import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#1AADAF',
            contrastText: "#fff",
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
    typography: {
        h6: {
            color: "white",
        },
        button: {
            color: "white",
        },
    }
});

export default theme;

