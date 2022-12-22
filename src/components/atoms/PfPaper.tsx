import * as React from 'react';
import { Paper, Typography, PaperProps } from '@mui/material';

export interface PfPaperProps extends PaperProps {
    title?: string;
    sub_title?: string;
    text?: string;
    datestart?: string;
    dateend?: string;
}

const PfPaper: React.FC<PfPaperProps> = (props) => {
    const _styles = { ...props.style };
    _styles.backgroundColor = props.style?.backgroundColor || 'white';
    _styles.color = props.style?.color || 'black';
    _styles.width = props.style?.width || '100%';
    _styles.minWidth = props.style?.minWidth || 300;
    _styles.padding = props.style?.height || '30px';
    _styles.textAlign = props.style?.textAlign || 'left';
    return (
        <Paper elevation={3} {...props} style={_styles}>
            <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                {props.title}
            </Typography>
            <Typography variant='h6' style={{ fontWeight: 'bold', marginBottom: 15 }}>
                {props.sub_title}
            </Typography>
            <Typography>{props.text}</Typography>
            {props.datestart && (
                <Typography sx={{ marginTop: 1 }}>
                    {props.datestart}
                    {props.dateend && `~${props.dateend}`}
                </Typography>
            )}
        </Paper>
    );
};

export default PfPaper;
