import Todo from './Todo';
import TodoForm from './TodoForm';
import { useTodo } from '../hooks/useTodo';
import Wrapper from './Wrapper';
import Title from './Title';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../const/theme';
import { ITodo } from '../types/types';
import { Context } from '../const/context';

const TodoList = () => {
    const {
        value,
        todos,
        editId,
        setValue,
        setTodos,
        setEditId,
        handleAddTodo,
        handleClearTodos,
        handleDeleteTodo,
        handleEditTodo,
        handleToggleTodo,
    } = useTodo();

    return (
        <Context.Provider
            value={{
                value,
                todos,
                editId,
                setValue,
                setTodos,
                setEditId,
                handleAddTodo,
                handleClearTodos,
                handleDeleteTodo,
                handleEditTodo,
                handleToggleTodo,
            }}
        >
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <Title />
                    <TodoForm />
                    {todos.map((todo: ITodo) => (
                        <Todo {...todo} key={todo.id} />
                    ))}
                </Wrapper>
            </ThemeProvider>
        </Context.Provider>
    );
};

export default TodoList;
