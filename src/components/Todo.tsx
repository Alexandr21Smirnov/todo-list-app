import { FC, memo, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ITodo } from '../types/types';
import { Checkbox } from '@mui/material';
import { Context } from '../const/context';

const Todo: FC<ITodo> = (todo) => {
    const { handleDeleteTodo, handleEditTodo, handleToggleTodo } = useContext(Context);

    return (
        <Grid
            key={todo.id}
            sx={{
                marginTop: '.6em',
                borderRadius: '.7rem',
                border: '1px solid #2da68c',
                minWidth: '90%',
            }}
        >
            <Grid
                item
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifySelf: 'space-between',
                    minWidth: '100%',
                }}
            >
                <Checkbox
                    onChange={() => handleToggleTodo(todo.id)}
                    checked={todo.complete}
                    sx={{
                        '& .MuiSvgIcon-root': { fontSize: 21 },
                        color: '#fff',
                        '&.Mui-checked': {
                            color: 'primary',
                        },
                    }}
                />
                {todo.complete ? (
                    <Typography
                        component="h4"
                        variant="h6"
                        sx={{
                            width: '300px',
                            textDecoration: 'line-through 0.15em #2da68c',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            hyphens: 'auto',
                        }}
                    >
                        {todo.text}
                    </Typography>
                ) : todo?.text?.length > 40 ? (
                    <Typography
                        component="h4"
                        variant="h6"
                        sx={{
                            maxWidth: '300px',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            hyphens: 'auto',
                        }}
                    >
                        {todo.text}
                    </Typography>
                ) : (
                    <Typography
                        component="h4"
                        variant="h6"
                        sx={{ width: '100%' }}
                    >
                        {todo.text}
                    </Typography>
                )}
                <Grid
                    container
                    sx={{
                        direction: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton
                        aria-label="edit"
                        onClick={() => handleEditTodo(todo.id)}
                    >
                        <EditIcon color="secondary" />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteTodo(todo.id)}
                    >
                        <DeleteIcon color="secondary" />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(Todo);
