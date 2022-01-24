import * as React from 'react';
import styled from 'styled-components'
import TimelineItem, {TimelineItemProps} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PfPaper, {PfPaperProps} from 'components/atoms/PfPaper';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface PfTimelineItemProps extends TimelineItemProps {
    paperProps: PfPaperProps;
    date: string;
    icon?: React.ReactNode;
};

const PfTimelineItem: React.FC<PfTimelineItemProps> = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <StyledTimelineItem matches={matches}>
        {matches ? <TimelineOppositeContent
          sx={{ m: 'auto 0', display: matches ? 'block' : 'inline-block'}}
          align="right"
          variant="body2"
        >
          {props.date}
        </TimelineOppositeContent> : <Box sx={{display: 'flex', alignItems: 'center', marginRight: '5px'}}>{props.date}</Box>}
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            {props.icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <PfPaper
          {...props.paperProps}
        />
        </TimelineContent>
      </StyledTimelineItem>
    );
};

const StyledTimelineItem = styled(TimelineItem)<{
    matches?: boolean;
}>`
    &:before{
        content: ${(p) => (p.matches ? '' : 'none')};
    }

`;

export default PfTimelineItem;
