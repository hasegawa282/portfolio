import React from 'react';
import { Star } from '@mui/icons-material';
import { Rating, RatingProps } from '@mui/material';

export interface PfRatingProps extends RatingProps {
    dam?: boolean;
}

const PfRating: React.FC<PfRatingProps> = (props) => {
    return (
        <Rating
            name='read-only'
            readOnly
            max={7}
            value={props.value}
            emptyIcon={<Star style={{ color: 'rgba(197,197,197,0.55)' }} fontSize='inherit' />}
        />
    );
};

export default PfRating;
