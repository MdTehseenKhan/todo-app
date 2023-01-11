import Todo from "/models/Todo"
import "/db"

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // delete data from your database
			try {
				const { id } = req.query
				const data = await Todo.findByIdAndDelete(id)
        res.status(200).json({ success: true })
			} catch ({ message }) {
				res.status(400).json({ message })
			}
      break
    default:
      res.setHeader('Allow', ['GET','DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}