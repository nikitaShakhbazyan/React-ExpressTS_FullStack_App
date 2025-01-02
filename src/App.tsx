import { Box, styled } from '@mui/material';
import Layout from './pages/Layout';
import Cards from './components/Main/Cards/Cards';

const MainBox = styled(Box)(() => ({
  backgroundColor: '#F8F8F8',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '378px',
}));

function App() {
  return (
    <Layout>
      <MainBox>
        <Cards />
      </MainBox>
    </Layout>
  );
}

export default App;
