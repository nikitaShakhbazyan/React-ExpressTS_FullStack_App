import { Box, styled } from '@mui/material';
import IconOnComputers from './IconOnComputers';
import IconOnPhones from './IconOnPhones';

const MainIconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '21px',
  paddingLeft: '72px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    paddingLeft: '0px',
  },
}));

const IconClick = () => {
  window.location.reload();
};

function Icon() {
  return (
    <MainIconBox>
      <IconOnComputers IconClick={IconClick} />
      <IconOnPhones IconClick={IconClick} />
    </MainIconBox>
  );
}

export default Icon;
