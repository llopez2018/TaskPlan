import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
