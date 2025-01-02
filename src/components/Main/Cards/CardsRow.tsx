import { Box, styled } from '@mui/material';
import CardsList from './CardsList';

const MainBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '100%',
  gap: '20px',
  paddingTop: '40px',
  paddingBottom: '40px',
}));

function CardsRow() {
  return (
    <MainBox>
      <CardsList />
    </MainBox>
  );
}

export default CardsRow;
