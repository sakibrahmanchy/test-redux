import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export type TaskCreateProps = {
    dispatch: Dispatch;
};

const TaskCreate = ({ dispatch }: TaskCreateProps) => {
    const [task, setTask] = useState('');
    return (
        <div
            style={{
                border: 'solid black 10px',
                padding: '100px',
                marginBottom: '20px',
            }}
        >
            <input
                type="text"
                onChange={(e: any) => {
                    setTask(e.target.value);
                }}
                value={task}
            />
            <button
                onClick={() => {
                    dispatch({
                        type: 'ADD_TASK',
                        payload: task,
                    });
                    setTask('');
                }}
            >
                Add Task
            </button>
        </div>
    );
};

// HOC - Higher Order Function -> Function that returns something to a component
export default connect(null)(TaskCreate);
