import { Box, styled } from '@mui/material';
import iconHarvest from '../../../public/icons/apple-touch-icon.png';

type IconOnPhonesProps = {
  IconClick: () => void;
};

const Icon = styled(Box)(({ theme }) => ({
  minWidth: '200px',
  cursor: 'pointer',
  display: 'none',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const IconBoxOne = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const IconBoxTwo = styled(Box)(() => ({

}));

const IconTextOne = styled(Box)(() => ({
  fontSize: '32px',
  color: '#FFFFFF',
  marginRight: '10px',
  fontFamily: 'Righteous',
  lineHeight: '17.38px',
}));

const IconTextTwo = styled(Box)(() => ({
  fontSize: '40px',
  color: '#FFFFFF',
  fontFamily: 'Righteous',
  lineHeight: '29.8px',
}));

function IconOnPhones({ IconClick }: IconOnPhonesProps) {
  return (
    <Icon onClick={IconClick}>
      <IconBoxOne>
        <IconTextOne>Harvest</IconTextOne>
        <img src={iconHarvest} alt="" style={{ width: '50px', height: '50px' }} />
      </IconBoxOne>
      <IconBoxTwo>
        <IconTextTwo>My Images</IconTextTwo>
      </IconBoxTwo>
    </Icon>
  );
}

export default IconOnPhones;
