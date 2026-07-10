import { useCounter2 } from "./Context/CounterContext2";

const Counter2 = () => {
  const { text, add, remove } = useCounter2();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-6">
        {text}
      </h1>


      <div className="flex gap-4">

        <button
          onClick={add}
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Add
        </button>


        <button
          onClick={remove}
          className="bg-red-500 text-white px-6 py-2 rounded"
        >
          Remove
        </button>

      </div>

    </div>
  );
};

export default Counter2;