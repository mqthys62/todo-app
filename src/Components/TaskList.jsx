import React from 'react'

const TaskItem = (task, index) => {
    return <li key={index} className='task__item'>{task}</li>
}

export default function TaskList(props) {
    const {TasksList} = props;
  return (
    <ul className='task__list'>
        {TasksList.map((task, index) => {
            return TaskItem(task, index);
        })}
    </ul>
  )
}
