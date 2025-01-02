import { Box, styled } from '@mui/material';
// import CardsRow from './CardsRow';
import SliderComponent from '../../SliderComponent/SliderComponent';

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
      <SliderComponent/>
    </MainBox>
  );
}

export default Cards;
