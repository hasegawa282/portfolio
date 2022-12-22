import * as React from 'react';
import styled from 'styled-components';
import TimelineItem, { TimelineItemProps } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PfPaper, { PfPaperProps } from 'components/atoms/PfPaper';
import { useMediaQuery, useTheme } from '@mui/material';

interface PfTimelineItemProps extends TimelineItemProps {
    paperProps: PfPaperProps;
    datestart: string;
    dateend?: string;
    icon?: React.ReactNode;
}

const PfTimelineItem: React.FC<PfTimelineItemProps> = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <StyledTimelineItem>
            {matches && (
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', display: matches ? 'block' : 'inline-block' }}
                    align='right'
                    variant='body2'
                >
                    {props.datestart}
                    {props.dateend && `~${props.dateend}`}
                </TimelineOppositeContent>
            )}
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>{props.icon}</TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <PfPaper
                    {...props.paperProps}
                    datestart={matches ? undefined : props.datestart}
                    dateend={matches ? undefined : props.dateend}
                />
            </TimelineContent>
        </StyledTimelineItem>
    );
};

const StyledTimelineItem = styled(({ isMd, ...props }: { isMd?: boolean } & TimelineItemProps) => (
    <TimelineItem {...props} />
))`
    &:before {
        content: ${(p) => (p.isMd ? '' : 'none')} !important;
    }
`;

export default PfTimelineItem;
