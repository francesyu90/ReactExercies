import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';

const BITCOIN = "bitcoin";

const checker = (store) => (next) => (action) => {

    if (action.type === ADD_TODO || action.type === ADD_GOAL) {

        if (
            action.todo.name.toLowerCase().includes(BITCOIN) || 
            action.goal.name.toLowerCase().includes(BITCOIN)
        ) {
            return alert("Nope. That's a bad idea.");
        }
    }

    return next(action);
}

export default checker;