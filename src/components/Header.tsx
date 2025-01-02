import { Box, styled } from '@mui/material';
import Background from './Background/Background';
import Icon from './Header/Icon/Icon';
import Search from './Header/Search/Search';
import PrivacyPolicy from './Modal/PrivacyPolicy';
import { useModalState } from '../hooks/useModalState';

const MainBox = styled(Box)`
  width: 100%;
  text-align: center;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  ${props => props.theme.breakpoints.down("sm")} {
    height: 100vh;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    height: 500px;
  }
`;

function Header() {

  const { isOpen, onToggle } = useModalState();

  const handleClick = () => {
    onToggle();
  };

  return (

    <MainBox>
      <Background>
        <Icon />
        <Search />
        <PrivacyPolicy  isOpen = {isOpen} handleClick={handleClick} />
      </Background>
    </MainBox>
  );
}

export default Header;
