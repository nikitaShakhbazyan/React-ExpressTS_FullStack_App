import { Box, styled } from '@mui/material';
import { PropsWithChildren } from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Header from '../components/Header';

const Wrapper = styled(Box)(() => ({
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
}));

function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
