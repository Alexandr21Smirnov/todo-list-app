import TodoList from './components/TodoList';
import Box from '@mui/material/Box';

const App = () => {
    return (

        <Box
            sx={{
                minHeight: '100vh',
                background: '#385c70',
                color: '#fff',
                padding: '3em'
            }}
        >
            <TodoList />
        </Box>

    );
};

export default App;
