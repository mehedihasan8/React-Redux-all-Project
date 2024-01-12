import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="font-bold text-center text-3xl my-10">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
