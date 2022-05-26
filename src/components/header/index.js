import { AppBar, Container, Grid, Toolbar } from '@mui/material';
import Image from 'next/image';
import UserAvatar from '../user-avatar';
import Link from '../link';
import { useContextState } from '../../context';

const Header = () => {
  const { state } = useContextState();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'whitesmoke' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container>
            <Grid item flexGrow={1} className="header-logo">
              <Link href="/dashboard">
                <Image src="/images/mentr_logo_trimmed.png" width="120" height="39" alt="Mentr logo" priority="low" />
              </Link>
            </Grid>
            <Grid item flexGrow={0}>
              <UserAvatar username={state?.userInformation?.user?.email} />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
