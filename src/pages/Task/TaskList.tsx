import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Task } from '../../store/Task/reducer';

type TaskProps = {
    tasks: Task[];
    dispatch: Dispatch;
};

const TaskList = ({ tasks, dispatch }: TaskProps) => {
    return (
        <div
            style={{
                border: 'solid black 10px',
                padding: '100px',
                marginBottom: '20px',
            }}
        >
            Total count of tasks: {tasks.length} <br />
            {tasks.length > 0 && (
                <span>
                    Tasks are:
                    <ul>
                        {tasks.map(({ id, name }) => (
                            <li key={id}>
                                {name}
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_TASK',
                                            payload: id,
                                        });
                                    }}
                                >
                                    Delete Task
                                </button>
                            </li>
                        ))}
                    </ul>
                </span>
            )}
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        tasks: state.Task.tasks,
    };
};

export default connect(mapStateToProps)(TaskList);
