import { AppBar, Container, Grid, Toolbar } from "@mui/material";
import Image from "next/image";


const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: 'whitesmoke' }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Grid container>
          <Grid item justifyContent="flex-start">
            <Image src="/images/mentr_logo_trimmed.png" width="120" height="39" alt="Mentr logo" />
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
