import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"

const BASE_URL = 'https://todo-app.mdtehseenkhan.repl.co'

export default function TodoItem({ id, title, description, dateUpdated }) {
	const [updateDate, setUpdateDate] = useState("")
	const router = useRouter()

  useEffect(() => {
		setUpdateDate(new Date(dateUpdated).toLocaleString())
	}, [dateUpdated])
	
  const editTodo = (id) => {
		router.push(`/edit/${id}`)
	}

	const deleteTodo = (id) => {
		axios.get(`${BASE_URL}/api/todos/delete/${id}`)
    .then(() => {
			router.push('/')
			// console.log('✅ Todo Deleted Successfully.')
		})
		.catch((err) => console.error(err.message))
	}
	
	return (<>
			<div className="todo-title w-3/5 flex-1 flex flex-col">
				<div className="font-medium truncate">{title}</div>
				<div className="text-xs text-gray-500">{updateDate}</div>
			</div>
			<div className="flex gap-2">
				<div
					onClick={() => editTodo(id)}
					className="update-todo-btn bg-indigo-500 hover:bg-indigo-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg" 
						fill="none" 
						viewBox="0 0 24 24" 
						strokeWidth={1.5} 
						stroke="currentColor" 
						className="w-6 h-6 text-white"
					>
						<path
							strokeLinecap="round" 
							strokeLinejoin="round" 
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" 
						/>
					</svg>
				</div>
				<div
					onClick={() => deleteTodo(id)}
					className="update-todo-btn bg-red-500 hover:bg-red-700"
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
						/>
					</svg>
				</div>
			</div>
	</>)
}