import { useState, useId } from "react"
import { useRouter } from "next/router"
import axios from "axios"

const { BASE_URL } = process.env

export default function AddEditTodo({ mode, defaultTitle, defaultDescription }) {
  const router = useRouter()
	const { id } = router.query
	const [title, setTitle] = useState(defaultTitle || "")
	const [description, setDescription] = useState(defaultDescription || "")
  const uniqueId = useId()

	const cancelEdit = () => router.push('/')
  
  const addTodo = () => {
	  axios.post(`${BASE_URL}/api/todos/add`, {
      title: title?.trim(),
	    description: description?.trim(),
		})
    .then(() => {
			// Setting input fields empty
			setTitle("")
			setDescription("")
			router.push('/') // Refresh the page
			// console.log('✅ Added to TodoList')
		})
    .catch((err) => console.error(err.message))
	}

	const editTodo = (id) => {
	  axios.post(`${BASE_URL}/api/todos/edit/${id}`, {
      title: title?.trim(),
	    description: description?.trim(),
		})
    .then(() => {
			router.push('/') // Go to Home page
			// console.log('✅ Successfully Edited Todo')
		})
    .catch((err) => console.error(err.message))
	}

	return (<>
		<form onSubmit={(e) => e.preventDefault()} className="relative border-2 p-7 rounded-lg">
			<h2 className="text-2xl text-center font-bold">{mode==="add" ? 'Add a' : 'Edit'} Todo</h2>
			<label htmlFor={`title-${uniqueId}`} className="text-sm text-gray-600 pb-2">Title</label>
			<input 
				type="text"
				placeholder="Title"
				id={`title-${uniqueId}`}
				name="title"
        value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
				className="input-box mb-3"
			/>
      <label htmlFor={`description-${uniqueId}`} className="text-sm text-gray-600 pb-2">Description</label>
      <textarea
				type="text"
				placeholder="Description..."
				id={`description-${uniqueId}`}
				name="description"
				rows={4}
        value={description}
				onChange={(e) => setDescription(e.target.value)}
				className="input-box"
			></textarea>
			{ mode==="edit" ? (<>
        <button
					onClick={cancelEdit}
					className="todo-btn bg-gray-200 hover:bg-gray-300"
				>
				  Cancel
			  </button>
				<button onClick={() => editTodo(id)} className="todo-btn text-white bg-blue-500 hover:bg-blue-600">
				  Done
			  </button>
      </>) : (<>
			  <button onClick={addTodo} className="todo-btn text-white bg-blue-500 hover:bg-blue-600">
				  Add Todo
			  </button>
			</>) }
		</form>
	</>)
}
