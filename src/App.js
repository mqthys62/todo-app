import { useState } from 'react';
import Card from './Components/Card';
import TaskList from './Components/TaskList';

function App() {
  const [todoList, setTodoList] = useState([])
  const [task, setTask] = useState("");
  const [cards, setCards] = useState([
    { title: "Titre1", imageSource: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", description: "yo la 6t"},
    { title: "Titre2", imageSource: "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg", description: "yo la 7t"},
  ]) 

  const addTask = (event) => {
    event.preventDefault();
    // On défini notre state sur ancienne données => nouvelle donnée
    setTodoList([...todoList, task])
    setTask("");
  } 

  return (
    <div className="App">
      <h1>Bienvenue sur la TodoApp</h1>
      <form onSubmit={(event) => addTask(event)}>
        <input value={task} onChange={(event) => setTask(event.currentTarget.value)} type="text" placeholder='New Task'/>
        <button type="submit">Add Task</button>
      </form>
      <TaskList TasksList={todoList} />

      {cards.map((card, index) => {
         return <Card key={index} title={card.title} imageSource={card.imageSource} description={card.description}/>
      })}
    </div>
  );
}
  export default App;
