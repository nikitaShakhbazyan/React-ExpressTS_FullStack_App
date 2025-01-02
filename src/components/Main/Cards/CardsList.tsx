import { Box, styled } from '@mui/material';
import img from '../../../public/cards-images/123.jpg';

const MainBox = styled(Box)(() => ({

}));

const Cards = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px'
}));

const ItemImg = styled(Box)(() => ({
  width: '280px',
  height: '228px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: '0px 0px 8px 3px #0000006c',
  },
  '& > div:nth-child(1)': {
    height: '90%',
    width: '80%',
    background: 'linear-gradient(65deg, #FB95A7, #B4A9EA, #FB95A7)',
    left: '-20%',
    top: '-10%',
    position: 'absolute',
    borderRadius: '50%',

  },
  '& > div:nth-child(2)': {
    height: '80%',
    width: '70%',
    background: 'linear-gradient(45deg, #76F0C4, #8080FC, #79B9EE)',
    right: '-12%',
    top: '-12%',
    position: 'absolute',
    borderRadius: '50%',

  },
  '& > div:nth-child(3)': {
    height: '65%',
    width: '80%',
    background: 'linear-gradient(65deg, #FB95A7, #B4A9EA, #FB95A7)',
    right: '-20%',
    bottom: '-15%',
    position: 'absolute',
    borderRadius: '50%',

  },
  '& > div:nth-child(4)': {
    height: '50%',
    width: '75%',
    background: 'linear-gradient(70deg, #0F8CEA, #79B9EE)',
    left: '-18%',
    bottom: '-10%',
    position: 'absolute',
    borderRadius: '50%',

  },
  '&::after': {
    content: '""',
    position: 'absolute',
    height: '100%',
    width: '100%',
    backdropFilter: 'blur(60px)',
  },
}));

const Img = styled('img')(() => ({
  width: '232px',
  height: '150px',
  borderRadius: '10px',
  objectFit: 'cover',
  zIndex: 1,
}));

const cardsArray = [
  { id: 1, image: img, alt: '' },
  { id: 2, image: img, alt: '' },
  { id: 3, image: img, alt: '' },
];

function CardsList() {
  return (
    <MainBox>
      <Cards>
        {cardsArray.map((card) => (
          <ItemImg key={card.id}>
            <div />
            <div />
            <div />
            <div />
            <Img src={card.image} alt={card.alt} />
          </ItemImg>
        ))}
      </Cards>
    </MainBox>
  );
}

export default CardsList;
