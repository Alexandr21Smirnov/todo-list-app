import Typography from '@mui/material/Typography';
import { memo } from 'react';

const Title = () => {

    return (
        <Typography variant="h2" component="h1">
            Todo List
        </Typography>
    );
};

export default memo(Title);
