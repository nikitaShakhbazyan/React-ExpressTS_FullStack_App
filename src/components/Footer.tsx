import { Box, styled } from '@mui/material';
import Contacts from './Footer/Contacts';
import RightsReserved from './Footer/RightsReserved';
import Background from './Background/Background';

const MainBox = styled(Box)(() => ({
  backgroundColor: '#AAB8FF',
  maxWidth: '100%',
  minHeight: '180px',
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
}));

function Footer() {
  return (
    <MainBox>
      <Background>
        <Contacts />
        <RightsReserved />
      </Background>
    </MainBox>
  );
}

export default Footer;
