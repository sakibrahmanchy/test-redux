import React, { useState } from 'react';

const Counter = () => {
    const [task, setTask] = useState(null);
    return (
        <div>
            Current Count: {task}
            <input type="text" />
            <button>Add Task</button>
        </div>
    );
};

export default Counter;