import { FormEvent, ChangeEvent, memo, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ITodo } from '../types/types';
import { Context } from '../const/context';

const TodoForm = () => {
    const {
        value,
        todos,
        editId,
        setTodos,
        setValue,
        setEditId,
        handleAddTodo,
        handleClearTodos,
    } = useContext(Context);

    const updateTodo = (id: string, text: string, complete: boolean): void => {
        const newTodo = todos.map((todo: ITodo) =>
            todo.id === id ? { id, text, complete } : todo
        );
        setTodos(newTodo);
        setEditId('');
        setValue('');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (value === '') return;

        handleAddTodo({
            id: uuid(),
            text: value,
            complete: false,
        });
        setValue('');

        if (editId) {
            const complete = false;
            updateTodo(editId, value, complete);
        }
    };

    const clearTodo = () => {
        if (todos.length == 0 || !handleClearTodos) return;
        handleClearTodos();
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                minWidth: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '2em',
            }}
        >
            <TextField
                variant="standard"
                color="primary"
                sx={{ input: { color: '#fff' } }}
                placeholder={editId ? 'Update Todo' : 'Add Todo'}
                value={value}
                onChange={handleChange}
            />
            <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{ marginLeft: '1em', minWidth: '4em' }}
            >
                {editId ? 'Update Todo' : 'Add Todo'}
            </Button>
            <Button
                color="primary"
                variant="contained"
                sx={{ marginLeft: '2em', minWidth: '4em' }}
                onClick={clearTodo}
            >
                Clear all
            </Button>
        </Box>
    );
};

export default memo(TodoForm);
