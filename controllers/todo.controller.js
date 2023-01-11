import Todo from "/models/Todo"
import "/db"

// GET all Todos from Database
export const getTodos = async () => {
	try {
		const data = await Todo.find({})
    return {
			success: true,
			data
		}
	} catch ({ message }) {
		return {
			success: false,
			message
		}
	}
}

// GET a single Todo from Database
export const getTodoById = async (id) => {
	try {
		const data = await Todo.findById(id)
    return {
			success: true,
			data
		}
	} catch ({ message }) {
		return {
			success: false,
			message
		}
	}
}

// ADD a Todo to Database
export const addTodo = async ({ title, description }) => {
	try {
		await Todo.create({ title, description })
		return {
			success: true
		}
	} catch ({ message }) {
		return {
			success: false,
			message
		}
	}
}

// DELETE a Todo from Database
export const deleteTodo = async (id) => {
  try {
		await Todo.findByIdAndDelete(id)
    return {
			success: true,
		}
	} catch ({ message }) {
		return {
			success: false,
			message
		}
	}
}

// UPDATE a Todo from Database
export const updateTodo = async ({ id, title, description }) => {
	try {
		const dateUpdated = Date.now()
		const data = await Todo.findByIdAndUpdate(id, {
			title,
			description,
			dateUpdated
		}, { returnDocument : 'after' })
    return {
			success: true,
			data
		}
	} catch ({ message }) {
		return {
			success: false,
			message
		}
	}
}