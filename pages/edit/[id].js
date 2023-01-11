import Todo from "/models/Todo"
import "/db"

import { 
	PageTitle, 
	AddEditTodo
} from "/components"


export default function Edit({ todo }) {
  return (<>
		<PageTitle>Edit | TodoApp</PageTitle>
    <div className="flex flex-col items-center w-full mt-10">
      <div className="w-96 md:w-8/12">
				{ todo ? 
					<AddEditTodo 
						mode="edit" 
						defaultTitle={todo?.title} 
						defaultDescription={todo?.description} 
					/> : 
					<div className="font-bold text-center text-3xl">
						No Todo Found☹️
					</div> 
        }
			</div>
		</div>
	</>)
}

export async function getServerSideProps(context) {
	const { id } = context.query
	let todo
  try {
		const data = await Todo.findById(id)
    todo = JSON.parse(JSON.stringify(data))
	} catch (err) {
		todo = ""
	}
	
	return {
		props: {
			todo
		}
	}
}