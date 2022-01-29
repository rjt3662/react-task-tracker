import React from 'react';

const tasks = [
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Headphone repair',
        day: 'Feb 6th at 2:30 pm',
        reminder: true
    },
    {
        id: 3,
        text: 'New Task',
        day: 'Feb 7th at 2:30 pm',
        reminder: true
    }

]

const Tasks = () => {
  return (
      <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
      </>
  )
};

export default Tasks;
