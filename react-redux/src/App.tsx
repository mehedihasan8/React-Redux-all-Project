import { useDispatch, useSelector } from "react-redux";
import {
  dicrement,
  dicrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex border gap-5 border-gray-400 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(dicrement())}
          className="px-3 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(dicrementByValue(5))}
          className="px-3 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Decrement By 5
        </button>
      </div>
    </div>
  );
}

export default App;
