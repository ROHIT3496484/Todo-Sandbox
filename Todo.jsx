import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState([]);
  const [val, setVal] = useState("");
  const handleadd = (val) => {
    setTask([val]);
  };
  const handledone = (i) => setTask(task.filter((_, index) => index !== i));
  return (
    <div>
      <input
        type="text"
        placeholder="Add"
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => handleadd(val)}>Add Task</button>
      <div>
        <ul>
          {task.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => handledone(index)}>Done</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
