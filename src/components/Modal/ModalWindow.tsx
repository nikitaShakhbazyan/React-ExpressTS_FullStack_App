import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CustomButton } from "../Header/Search/InputBox";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';

type PropsModalWindow = {
    isOpen: boolean,
    handleClick: () => void
}

const CustomDialog = styled(Dialog)(() => ({
    backdropFilter: "blur(5px)"
}))


const CustomPaper = styled(Paper)`
    && {
        max-width: 60vw;
        max-height: 70vh;
      }
`
    ;

const CustomDialogTitle = styled(DialogTitle)(() => ({
    textAlign: 'center',
    backgroundColor: 'rgba(170, 184, 255, 1)',
    color: 'white',
    fontFamily: 'Righteous',
    fontSize: '24px',
    maxHeight: '4vh'
}))

const CustomDialogContent = styled(DialogContent)(() => ({
    "&::-webkit-scrollbar": {
        width: '5px'
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(170, 184, 255, 1)",
        maxHeight: '3px',
        borderRadius: 2
    }
}))


const CustomDialogContentText = styled(DialogContentText)(() => ({
    fontFamily: 'Montserrat',
    fontSize: '14px',
    color: 'rgba(104, 104, 107, 1)'
}))

const CustomDialogActions = styled(DialogActions)(() => ({
    backgroundColor: 'rgba(170, 184, 255, 1)',
    minHeight: '5vh'
}))


function ModalWindow(props: PropsModalWindow) {

    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    return (
        <CustomDialog PaperComponent={CustomPaper} open={props.isOpen} scroll={scroll}>
            <CustomDialogTitle id="scroll-dialog-title">Please read the privacy policy of our service</CustomDialogTitle>
            <CustomDialogContent dividers={scroll === 'paper'}>
                <CustomDialogContentText>
                    Terms of Service - HarvestMyImages <br />
                    Please read these terms of service (Terms of Service or ToS) carefully before accessing our application and website. <br />
                    Our ToS may change from time to time to be in line with the developments to our application and website to give our valued users the highest satisfaction. Please check regularly the update time on top of the ToS to ensure you have read the updated version with changes. <br />
                    Acceptance of Terms of Service <br />
                    By accessing and using our application and website, you signify your acceptance of our policy and ToS, including the updated versions. If you do not agree with any content, please do not use our application and website.<br />
                    Who may use our Services (User)<br />
                    Our ToS governs the relationship between HarvestMyImages application (HarvestMyImages) and HarvestMyImages website (HarvestMyImages Web) including HarvestMyImages (collectively, HarvestMyImages) and users of HarvestMyImages App and Web (User) being who access the HarvestMyImages App and Web and/or use the products and services provided through the HarvestMyImages App and Web (HarvestMyImages Products and Services).<br />
                    Our ToS is a mutual agreement between you, either an individual or an entity (You or User) or a group of individuals or entities (You or Users) and the developer of HarvestMyImages Products and Services (HarvestMyImages) regarding the use of HarvestMyImages Products and Services.<br />
                    These Ter are responsible for providing exact and correct identification information of themselves. HarvestMyImages is not responsible for any fake or incorrect information provided by the Users. If we discover such incidents we would ban Users from accessing and using HarvestMyImages Web and our Services.<br />
                    Advertising<br />
                    We accept advertisements (Ads) on HarvestMyImages Web to maintain and support our own research and development on HarvestMyImages Web for non-commercial purposes. Ads appearing on HarvestMyImages Web may be delivered to Users by advertising partners who may set cookies. They will only compile non-personal identification information about you or others who use your computer and do not track personal information about you, such as your name, email address, and physical address. You may dismiss the use of the cookies or cease access to our application and website at any time as Users of HarvestMyImages are not required to accept the Ads.<br />
                    Changes to this privacy policy<br />
                    HarvestMyImages has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of HarvestMyImages Web, revise the updated date on the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.<br />
                    Your acceptance of these terms<br />
                    By accessing and using HarvestMyImages Web, you express your voluntary acceptance of this policy. If not, please do not use our Services. Your continued use of the Services following the posting of changes to this policy will be deemed your acceptance of those changes.<br />
                </CustomDialogContentText>
            </CustomDialogContent>
            <CustomDialogActions>
                <CustomButton sx={{ color: 'white', gridColumnGap: '1px' }} onClick={props.handleClick}>
                    Confirm
                    <CheckCircleOutlineIcon sx={{ fontSize: '22px' }} />
                </CustomButton>
            </CustomDialogActions>
        </CustomDialog>
    )
}

export default ModalWindow;