import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Box, styled, Button } from '@mui/material';
import { EffectCards } from 'swiper/modules';
import {
  CloudDownloadOutlined,
} from '@mui/icons-material';
import img1 from '../../public/cards-images/123.jpg';
import IconNext from '../../public/NextAndPrevImg/Next.png';
import IconPrev from '../../public/NextAndPrevImg/Prev.png';
import DownloadOtherPost from './DownloadOtherPost.tsx';

const img2 = '';
const img3 = '';

const CardBox = styled(Box)(() => ({
  width: '100% ',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
}));

export const MainBox = styled(Box)(() => ({
  margin: '0 auto',
  width: '100% ',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '380px',
  height: '493px',
  '@media (max-width: 768px)': {
    width: '300px',
  },
}));

const CustomButton = styled(Button)(() => ({
  borderRadius: '10px',
  fontSize: '20px',
  textTransform: 'none',
  fontFamily: 'Righteous',
  background: 'linear-gradient(97.84deg, #5672FE -7.65%, #8562E9 106.37%)',
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#f9f9fa',
}));

type ButtonSwitchProps = {
  Image : string
};

const ButtonSwitch = styled(Button)(({ Image }:ButtonSwitchProps) => ({
  backgroundImage: `url(${Image})`,
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  borderRadius: '50%',

}));

const Img = styled('img')(() => ({
  width: '325px',
  height: '334px',
  borderRadius: '10px',
  objectFit: 'cover',
  '@media (max-width: 597px)': {
    width: '220px',
  },
  '@media (max-width: 320px)': {
    width: '150px',
  },
}));

type SwitchButtonsProps = {
  isLeft? : boolean,
  isRight?: boolean
};

const SwitchButtons = styled(Button)(({ isLeft, isRight }: SwitchButtonsProps) => ({
  borderRadius: '50%',
  width: '62px',
  height: '62px',
  fontSize: '20px',
  textTransform: 'none',
  fontFamily: 'Righteous',
  background: 'linear-gradient(97.84deg, #5672FE -7.65%, #8562E9 106.37%)',
  zIndex: '2',
  color: '#f9f9fa',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  marginLeft: isLeft ? '350px' : '0',
  marginRight: isRight ? '350px' : '0',

  '@media (max-width: 597px)': {
    display: 'none',
  },
  '@media (max-width: 768px)': {
    display: 'none',
  },
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '380px',
  height: '493px',
  '@media (max-width: 597px)': {
    width: '250px',
    height: '450px',
  },
  '@media (max-width: 320px)': {
    width: '200px',
  },
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '18px',
  flexDirection: 'column',
  fontSize: '22px',
  backgroundColor: '#f9f9fa',
  boxShadow: 'grey 25px 26px 27px',
  '@media (max-width: 597px)': {
    width: '250px',
  },
}));

const images = [{ id: 1, image: img1 }, { id: 2, image: img2 }, { id: 3, image: img3 }];

function SliderComponent() {
  const swiperRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  if (images.length > 1) {
    return (
      <MainBox>
        <CardBox>
          <SwitchButtons isLeft onClick={handlePrev}>
            <ButtonSwitch Image={IconPrev} />
          </SwitchButtons>
          <Container>
            <CustomSwiper
              effect="cards"
              modules={[EffectCards]}
              className="mySwiper"
              ref={swiperRef}
            >
              {images.map((img) => (
                <CustomSwiperSlide key={img.id}>
                  <Img src={img.image} alt={`Slide ${img.id }`} />
                  <CustomButton variant="contained">
                    Download
                    <CloudDownloadOutlined />
                  </CustomButton>

                </CustomSwiperSlide>
              ))}
            </CustomSwiper>
          </Container>
          <SwitchButtons isRight onClick={handleNext}>
            <ButtonSwitch Image={IconNext} />
          </SwitchButtons>
        </CardBox>
        <DownloadOtherPost />
      </MainBox>
    );
  }

  return (
    <MainBox>
      <CardBox>
        <Container>
          <CustomSwiper
            effect="cards"
            grabCursor
            modules={[EffectCards]}
            className="mySwiper"
            ref={swiperRef}
          >
            {images.map((img) => (
              <CustomSwiperSlide key={img.id}>
                <Img src={img.image} alt={`Slide ${img.id + 1}`} />
                <CustomButton variant="contained">
                  Download
                  <CloudDownloadOutlined />
                </CustomButton>
              </CustomSwiperSlide>
            ))}
          </CustomSwiper>
        </Container>
      </CardBox>
      <DownloadOtherPost />
    </MainBox>
  );
}

export default SliderComponent;