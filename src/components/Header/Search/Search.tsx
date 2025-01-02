import { Box, styled } from '@mui/material';

import HeaderTitle from './HeaderTitle';
import InputBox from './InputBox';

const MainBox = styled(Box)`
    
    margin: 0 auto;
    text-align: center;
    color: white;
    padding-top: 2em;
    max-width: 90%;

    ${props => props.theme.breakpoints.down("sm")} {  
        padding-top: 50%;
    }
   
    ${props => props.theme.breakpoints.up("md")} {
        max-width: 60%;
    }
`;

function Search() {
    return (
        <MainBox>
            <HeaderTitle />
            <InputBox />
        </MainBox>
    )
}


export default Search;
