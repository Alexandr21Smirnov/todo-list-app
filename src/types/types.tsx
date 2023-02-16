export interface ITodo {
    readonly id: string;
    text: string;
    complete: boolean;
}

export interface IContext {
    value: any;
    todos: ITodo[];
    editId: string;
    setValue: (value: string) => void;
    setTodos: (todos: ITodo[]) => void;
    setEditId: (editId: string) => void;
    handleAddTodo({}): void;
    handleClearTodos(): void;
    handleDeleteTodo(id: string): void;
    handleEditTodo(id: string): void;
    handleToggleTodo(id: string): void;
}
