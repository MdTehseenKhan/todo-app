import Todo from "/models/Todo"
import "/db"

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      // Get data from your database
			try {
				const data = await Todo.find({})
        res.status(200).json({ data })
			} catch ({ message }) {
				res.status(400).json({ message })
			}
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}