import { Box, Button, Typography, styled } from "@mui/material";
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';

import ModalWindow from "./ModalWindow";


type PropsPrivacyPolicy = {
    isOpen: boolean,
    handleClick: () => void
}

const ButtonBox = styled(Box)`
    max-width: 100%;

    ${props => props.theme.breakpoints.down("sm")} {
        margin-top: auto;
        margin-left: 60vw;
        margin-bottom: 5px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        margin-top: 10vh;
        margin-left: 70vw;
    }
`;

const CustomPrivacyButton = styled(Button)(() => ({
    borderRadius: '10px',
    background: 'white',
    border: 'none',
    "&:hover": {
        backgroundColor: "white"
    },
   whiteSpace:"nowrap"
}))

const CustomTypography = styled(Typography)(() => ({
    fontSize: '12px',
    textTransform: 'none',
    fontFamily: 'Righteous',
    background: "linear-gradient(97.84deg, #5672FE -7.65%, #8562E9 106.37%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
}))

function PrivacyPolicy(props: PropsPrivacyPolicy) {

    return (
        <ButtonBox>
            <CustomPrivacyButton variant="contained" onClick={props.handleClick}>
                <CustomTypography>privacy policy</CustomTypography>
                <PrivacyTipOutlinedIcon style={{ color: '#8562E9', fontSize: '14px' }} />
                <ModalWindow isOpen = {props.isOpen} handleClick={props.handleClick}></ModalWindow>
            </CustomPrivacyButton>
        </ButtonBox>
    )
}

export default PrivacyPolicy;