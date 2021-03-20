export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, 
                { 
                    id: Date.now(), 
                    text: action.todo, 
                    completed: false 
                }
            ];
        case 'TOGGLE_TODO': 
            if (action.todo.completed === false) {
                return [
                    ...state,
                    action.todo.completed = true
                ]
            } else {
                return [
                    ...state,
                    action.todo.completed = false
                ]
            }
        default: 
        return state;
    }
}