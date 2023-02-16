import { useCallback, useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEY } from '../const/local-storage';
import { ITodo } from '../types/types';

export const useTodo = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [editId, setEditId] = useState<string>('');
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        const storedTodos = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_KEY)!
        );
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        if (todos?.length)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        return () => {
            localStorage.clear();
        };
    }, [todos]);

    const handleAddTodo = useCallback(
        (todo: ITodo) => {
            const newTodos = [todo, ...todos];
            setTodos(newTodos);
        },
        [todos]
    );

    const handleToggleTodo = useCallback(
        (id: string) => {
            const newTodos = [...todos];
            const todo = newTodos.find((todo: ITodo) => todo.id === id);
            if (todo != undefined) todo.complete = !todo.complete;
            setTodos(newTodos);
        },
        [todos]
    );

    const handleDeleteTodo = useCallback(
        (id: string) => {
            setTodos(todos.filter((todo: ITodo) => todo.id !== id));
        },
        [todos]
    );

    const handleEditTodo = useCallback(
        (todoId: string) => {
            const findTodo = todos.find((todo: ITodo) => todo.id === todoId);
            if (findTodo != undefined) setValue(findTodo.text);
            setEditId(todoId);
        },
        [todos]
    );

    const handleClearTodos = () => {
        setTodos([]);
    };

    return {
        todos,
        value,
        editId,
        setValue,
        setEditId,
        setTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
        handleEditTodo,
        handleClearTodos,
    };
};
