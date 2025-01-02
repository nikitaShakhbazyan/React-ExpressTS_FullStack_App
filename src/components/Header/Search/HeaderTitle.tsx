import { Box, styled, Typography } from '@mui/material';

const MainBox = styled(Box)(() => ({
}))


const TypoTitle = styled(Typography)`
    font-family: 'Righteous';
    letter-spacing: 0.5px;
    ${props => props.theme.breakpoints.up("xs")} {
        font-size: 32px
      }
      ${props => props.theme.breakpoints.up("md")} {
        font-size: 40px
      }
`

const TypoSubtitle = styled(Typography)`
    font-family: 'Montserrat';
    ${props => props.theme.breakpoints.up("xs")} {
        font-size: 12px
      }
      ${props => props.theme.breakpoints.up("md")} {
        font-size: 16px
      }
`

function HeaderTitle() {

    return (
        <MainBox>
            <TypoTitle variant='h1'>
                Instagram Downloader
            </TypoTitle>
            <TypoSubtitle >
                download any instagram posts you want
            </TypoSubtitle>
        </MainBox>
    )
}

export default HeaderTitle;