import Todo from "/models/Todo"
import "/db"

export default async function handler(req, res) {

  switch (req.method) {
    case 'POST':
      // create data in your database
			try {
				const { title, description } = req.body
				// const _id = await Todo.countDocuments() + 1
				const data = await Todo.create({ title, description })
        res.status(200).json({ data })
			} catch ({ message }) {
				res.status(400).json({ message })
			}
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}