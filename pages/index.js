import { Footer } from '@components/common';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled(Grid)`
  height: 100vh;
  padding-top: 5rem;
`;
const Home = () => {
  return (
    <Wrapper container direction="column">
      <Grid item xs container direction="column" alignItems="center">
        <img src="/logo.png" alt="logo" />
        <Typography variant="h3">
          Hello,
          {process.env.APP_NAME}
          !
        </Typography>
      </Grid>
      <Footer />
    </Wrapper>
  );
};

export default Home;
