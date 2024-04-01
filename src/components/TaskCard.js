import React from "react";

function TaskCard({ toDoList, deleteFunction }) {
  return (
    <div className="bg-red-400  w-1/3 h-[300px] overflow-y-scroll border border-black">
      <h1 className="text-center font-bold m-4 text-xl">High priority tasks</h1>
      {toDoList.map((x, index) => {
        return (
          <div
            className="flex justify-between items-center m-4 bg-orange-300 border border-black p-2 rounded-md "
            key={index}
          >
            <h1 className={"font-bold "}>📌 {x}</h1>

            <button
              className=""
              onClick={() => {
                deleteFunction(index);
              }}
            >
              <img
                className="rounded-full w-10 h-10 bg-white"
                src="https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/delete-316.png"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskCard;
