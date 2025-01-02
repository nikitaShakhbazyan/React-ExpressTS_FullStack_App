import { Box, styled } from '@mui/material';

const MainBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  fontFamily: 'Montserrat',
  fontWeight: '500',
}));

function RightsReserved() {
  return (
    <MainBox>
      ©2023 All rights reserved.
    </MainBox>
  );
}

export default RightsReserved;
