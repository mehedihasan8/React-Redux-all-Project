import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
// import { useGetDateQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // get form local matchin
  const { todos } = useAppSelector((state) => state.todos);

  // get form server  matchin
  // const { data: todos } = useGetDateQuery(undefined);
  // console.log(data);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-4">
        {todos.length === 0 ? (
          <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-lg">
            <p>There is no task pending...</p>
          </div>
        ) : (
          <div>
            {todos.map((item) => (
              <TodoCard
                key={item.id}
                title={item.title}
                description={item.description}
                id={item.id}
                isCompleted={item.isCompleted}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
