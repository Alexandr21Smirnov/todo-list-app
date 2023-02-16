import { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';

const Wrapper = ({ children }: PropsWithChildren) => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '2em',
                bgcolor: 'background.default',
                borderRadius: '1em',
            }}
        >
            {children}
        </Container>
    );
};

export default Wrapper;
