import TaskCard from "./components/TaskCard";
import { useState } from "react";
import TaskCard1 from "./components/TaskCard1";
import TaskCard2 from "./components/TaskCard2";

function App() {
  const [task, setTask] = useState("");
  const [todo, setToDo] = useState([]);
  const [todo1, setToDo1] = useState([]);
  const [todo2, setToDo2] = useState([]);

  // const clickHandler = (e) => {

  // };

  const deleteHandler = (indexValueToDelete) => {
    const newToDo = todo.filter((x, index) => index !== indexValueToDelete);
    setToDo(newToDo);
  };
  const deleteHandler1 = (indexValueToDelete) => {
    const newToDo = todo1.filter((x, index) => index !== indexValueToDelete);
    setToDo1(newToDo);
  };
  const deleteHandler2 = (indexValueToDelete) => {
    const newToDo = todo2.filter((x, index) => index !== indexValueToDelete);
    setToDo2(newToDo);
  };

  return (
    <div className="">
      <div className="card w-full h-[300px] bg-orange-300 flex flex-col justify-center items-center border border-black">
        <h1 className="font-bold my-4 text-2xl">कार्यसूची 2.0</h1>
        <input
          className="w-1/2 border border-black p-2 rounded-lg"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <div className="">
          {/* Three buttons  */}

          <button
            className="m-4 p-2 font-bold bg-red-300 rounded-full w-12 h-12 hover:bg-red-400 border border-black"
            onClick={() => {
              if (task.trim() !== "") {
                const tasks = [...todo, task];
                setToDo(tasks);
                setTask("");
              }
            }}
          ></button>
          <button
            className="m-4 p-2 font-bold bg-yellow-300 rounded-full w-12 h-12 hover:bg-yellow-400 border border-black"
            onClick={() => {
              if (task.trim() !== "") {
                const tasks = [...todo1, task];
                setToDo1(tasks);
                setTask("");
              }
            }}
          ></button>
          <button
            className="m-4 p-2 font-bold bg-green-300 rounded-full w-12 h-12 hover:bg-green-400 border border-black"
            onClick={() => {
              if (task.trim() !== "") {
                const tasks = [...todo2, task];
                setToDo2(tasks);
                setTask("");
              }
            }}
          ></button>
        </div>
      </div>

      <div className="flex ">
        <TaskCard toDoList={todo} deleteFunction={deleteHandler} />
        <TaskCard1 toDoList={todo1} deleteFunction={deleteHandler1} />
        <TaskCard2 toDoList={todo2} deleteFunction={deleteHandler2} />
      </div>
    </div>
  );
}

export default App;
