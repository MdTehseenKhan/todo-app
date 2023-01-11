
import { Schema, model, models } from "mongoose"

const TodoSchema = Schema({
	//_id: { type: Number, required: true },
	title: { type: String, required: true },
	description: { type: String },
	dateCreated: { type: Date, default: () => Date.now() },
	dateUpdated: { type: Date, default: () => Date.now() }
})

const Todo = models.Todo || model('Todo', TodoSchema)
export default Todo