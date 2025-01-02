import { Button, Box, styled } from '@mui/material';
import { UndoOutlined } from '@mui/icons-material';

const ButtonDownloadOtherPost = styled(Button)(() => ({
  borderRadius: '10px',
  fontSize: '20px',
  textTransform: 'none',
  fontFamily: 'Righteous',
  background: 'linear-gradient(97.84deg, #5672FE -7.65%, #8562E9 106.37%)',
  zIndex: '2',
  width: '315px',
  height: '60px',
  color: '#fff',
  marginTop: '135px',
  marginLeft: '80px',
  marginBottom: '20px',
  letterSpacing: '1.5px',
  '@media (max-width: 597px)': {
    width: '252px',
    height: '48px',
  },
  '@media (max-width: 768px)': {
    width: '50%',
    height: '55px',
    marginTop: '20px',
    fontSize: '14px',

  },
  '@media (max-width: 320px)': {
    width: '150px',
    fontSize: '8px',
    marginLeft: '5px',
  },
}));

const MainBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'start',
}));

function DownloadOtherPost() {
  return (
    <MainBox>
      <ButtonDownloadOtherPost>
        Download other post
        <UndoOutlined />
      </ButtonDownloadOtherPost>
    </MainBox>
  );
}

export default DownloadOtherPost;