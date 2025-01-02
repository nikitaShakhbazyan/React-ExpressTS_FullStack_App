import { Box, styled } from '@mui/material';
import CardsRow from './CardsRow';

const MainBox = styled(Box)(() => ({
  backgroundColor: '#F8F8F8',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '378px',
}));

function Cards() {
  return (
    <MainBox>
      <CardsRow />
    </MainBox>
  );
}

export default Cards;
