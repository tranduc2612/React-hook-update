import {useSyncExternalStore} from "react";


let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners : any[] = [];

export const todosStore = {
    addTodo() {
        todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
        emitChange();
    },
    subscribe(listener) {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
    getSnapshot() {
        return todos;
    }
};

function emitChange() {
    for (let listener of listeners) {
        listener();
    }
}

function DemoUseSyncExternalStore(){
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    return (
        <>
            - Kết nối với bên thứ 3 thay redux đc k ?
            - Dùng để lưu dữ liệu ngoại tuyến ??
            <br />
            <button onClick={() => todosStore.addTodo()}>Add todo</button>
            <hr />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}

export default DemoUseSyncExternalStore