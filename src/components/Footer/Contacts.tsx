import { Box, styled } from '@mui/material';

const MainBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '70px',
}));

const ContactItem = styled(Box)(() => ({
  cursor: 'pointer',
  fontFamily: 'Montserrat',
  fontWeight: '500',
}));

const handleEmailClick = () => {
  window.location.href = 'mailto:Something@mail.ru';
};

const handlePhoneClick = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
};

function Contacts() {
  return (
    <MainBox>
      <ContactItem onClick={handleEmailClick}>Something@mail.ru</ContactItem>
      |
      <ContactItem onClick={() => handlePhoneClick('+7 (912) 123123123')}>+7 (912) 123123123</ContactItem>
      |
      <ContactItem onClick={() => handlePhoneClick('+7 (912) 134512364')}>+7 (912) 134512364</ContactItem>
      |
      <ContactItem>Something</ContactItem>
    </MainBox>
  );
}

export default Contacts;
