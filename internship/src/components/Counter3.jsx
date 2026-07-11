import { useContext, useState } from "react";
import { CounterContext3 } from "./Context/CounterContext3";

const Counter3 = () => {

  const { user, createUser, clearUser } = useContext(CounterContext3);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");


  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-2xl font-bold mb-5">
        User Form
      </h1>


      <h2>
        Name is: {user.name}
      </h2>

      <h2>
        Address is: {user.address}
      </h2>


      <div className="mt-5">

        <label>Name</label>
        <input
          className="border p-2 block mb-3"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <label>Address</label>
        <input
          className="border p-2 block mb-3"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />


        <button
          onClick={() => createUser(name, address)}
          className="bg-blue-500 text-white px-6 py-2 rounded mr-3"
        >
          Create
        </button>


        <button
          onClick={clearUser}
          className="bg-red-500 text-white px-6 py-2 rounded"
        >
          Clear
        </button>

      </div>

    </div>
  );
};

export default Counter3;