import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetDateQuery } from "@/redux/api/api";
import { JSX } from "react/jsx-runtime";
import { useState } from "react";

const TodoContainer = () => {
  // get form local matchin
  useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState("");

  // get form server  matchin
  const { data: todos, isLoading } = useGetDateQuery(priority);

  if (isLoading) {
    return (
      <p className="flex items-center justify-center font-semibold text-2xl">
        loading...
      </p>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-4">
        {todos?.length === 0 ? (
          <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-lg">
            <p>There is no task pending...</p>
          </div>
        ) : (
          <div>
            {todos?.map(
              (
                item: JSX.IntrinsicAttributes & {
                  title: string;
                  description: string;
                  isCompleted?: boolean | undefined;
                  priority: string;
                  _id: string;
                }
              ) => (
                <TodoCard key={item._id} {...item} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
