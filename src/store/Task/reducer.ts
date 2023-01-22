import { Reducer } from 'react';

export type Task = {
    id?: number;
    name?: string;
};

export type Action = {
    type: string;
    payload: any;
};

export type TaskState = {
    tasks?: Task[];
    otherInfo?: any;
};

export const initialTaskState: TaskState = {
    tasks: [],
    otherInfo: {},
};

const taskReducer: Reducer<TaskState, any> = (
    state: TaskState = initialTaskState,
    action: Action
) => {
    const { type = '', payload = null } = action;
    switch (type) {
        case 'ADD_TASK': {
            if (!payload) {
                return state;
            }
            const taskLength = state.tasks.length;
            const newTask = {
                id: taskLength + 1,
                name: payload,
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            };
        }
        case 'DELETE_TASK':
            if (!payload) {
                return state;
            }
            return {
                ...state,
                tasks: state.tasks.filter(({ id }) => id !== payload),
            };
        default:
            return state;
    }
};

export default taskReducer;

// Reducer = action -> state change
// State = Current Condition, defined by data
