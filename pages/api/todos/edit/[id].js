import Todo from "/models/Todo"
import "/db"

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      // update data in your database
			try {
				const { id } = req.query
				const { title, description } = req.body
				const dateUpdated = Date.now()
				const data = await Todo.findByIdAndUpdate(id, {
					title,
					description,
					dateUpdated
				}, { returnDocument : 'after' })
        res.status(200).json({ data })
			} catch ({ message }) {
				res.status(400).json({ message })
			}
      break
    default:
      res.setHeader('Allow', ['POST','PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}