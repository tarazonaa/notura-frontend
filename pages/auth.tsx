import { Card, CardContent, CardHeader, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Navbar from "./components/NavBar";

export default function Auth() {
    return (
    <Container>
    <Navbar/>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid 
        item xs={3}
        alignItems="center"
        justifyContent="center"
      >
        <Card color="primary">
            <CardHeader>
                <Typography variant="h1" gutterBottom>
                Sign in 
                </Typography>
            </CardHeader>
            <CardContent>
                <Stack spacing={2}>
                    <TextField color="secondary" fullWidth variant="filled" label="Email"/>
                    <TextField fullWidth variant="filled" label="Password" type = "password"/>
                    
                </Stack>
            </CardContent>
        </Card>
      </Grid>   
       
    </Grid>
    </Container>
    )
}
