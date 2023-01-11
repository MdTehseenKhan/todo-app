import Todo from "/models/Todo"
import "/db"

import { 
	PageTitle, 
	AddEditTodo, 
	TodoList 
} from "/components"


export default function Home({ todos }) {
	
  return (<>
		<PageTitle>TodoApp | Home</PageTitle>
    <div className="flex flex-col items-center w-full mt-10">
      <div className="w-96 md:w-8/12 mb-5">
		  	<AddEditTodo mode="add"/>
		  </div>
			<div className="w-96 md:w-8/12 mb-5">
				{ todos ? 
				  <TodoList 
						todos={todos} 
					/> : 
					<div className="font-bold text-center text-3xl">
						No Todo Found☹️
					</div>
        }
			</div>
		</div>
	</>)
}

export async function getServerSideProps() {
  let todos
	try {
		const data = await Todo.find()
    todos = JSON.parse(JSON.stringify(data))
	} catch (err) {
		todos = ""
	}
	
	return {
		props: {
			todos
		}
	}
}