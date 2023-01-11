import TodoItem from "/components/TodoItem"

export default function TodoList({ todos }) {
	return (<>
		<div className="border-2 p-7 rounded-lg">
			<p className="text-sm text-gray-600 pb-2">Your Todos:</p>
        <div className="flex flex-col gap-2">
				  { todos?.map(({ _id, title, description, dateUpdated }) => (
		        <div 
			        key={_id}
			        className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-2 pl-4"
		      	>
						  <TodoItem 
							  id={_id} 
							  title={title} 
							  description={description} 
							  dateUpdated={dateUpdated}
						  />
						</div>)
	        )}
			</div>
		</div>
	</>)
}