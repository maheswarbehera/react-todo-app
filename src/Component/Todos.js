import React from 'react'

function Todos({todo, index, deleteTodo, toggleCheck}) {
  return (
    <> 
            <li
              className={`mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded  p-2 ${todo.checked ? "line-through" : ""}`}
              key={index}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => toggleCheck(index)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="">
                  {todo.text}
                </span>
              </div> 
              <button
                onClick={() => deleteTodo(index)}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li> 
            {/* <li className={`flex items-center justify-between p-2 ${todo.checked ? "line-through" : ""}`}>
      <span onClick={() => toggleCheck(index)} className="cursor-pointer">
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)} className="text-red-500">
        Delete
      </button>
    </li> */}
    </>
  )
}

export default Todos