import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Button, DialogActions } from '@mui/material';
import styled from 'styled-components';

export interface PfDialogProps extends DialogProps {
    children?: React.ReactNode;
    title?: string;
    onClose: () => void;
    open: boolean;
    isWhite?: boolean;
}

const PfDialog: React.FC<PfDialogProps> = (props) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <StyledDialog
            fullScreen={fullScreen}
            open={props.open}
            onClose={props.onClose}
            aria-labelledby='responsive-dialog-title'
            maxWidth={'md'}
            isWhite={props.isWhite}
            sx={{ border: '5px solid black' }}
        >
            <DialogTitle id='responsive-dialog-title'>
                <Box sx={{ fontSize: 'h4.fontSize', color: 'rgba(196,196,196,1)' }}>{props.title}</Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{props.children}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} style={{ color: 'rgba(196,196,196,1)' }}>
                    Close
                </Button>
            </DialogActions>
        </StyledDialog>
    );
};

const StyledDialog = styled(({ isWhite, ...props }: PfDialogProps) => <Dialog {...props} />)``;

export default PfDialog;
