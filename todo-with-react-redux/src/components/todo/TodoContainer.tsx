import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <AddTodoModal />
        <Button>filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-4">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-lg">
          <p>There is no task pending...</p>
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
