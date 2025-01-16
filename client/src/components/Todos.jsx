import React from "react";
import toast  from "react-hot-toast";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import TickIcon from "./icons/TickIcon";
import useSWR from "swr";
import { CircleUserRound } from "lucide-react";


const fetcher = (url, options = {}) =>
    fetch(url,
        {
            method: options.method || "GET",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            mode: "cors",
            body: options.body ? JSON.stringify(options.body) : undefined,
        }
    ).then((res) => res.json());

const Todos = () =>
{
    const {data, error, mutate, isLoading} = useSWR("http://localhost:3000/api/todos", fetcher);
    if (error)
    {
        return <h1 className="text-2xl py-2 text-center">Something went wrong!</h1>;
    }

    if (isLoading)
        {
            return <h1 className="text-2xl py-2 text-center">Loading...</h1>;
        }
    /*console.log(data);*/
    

    return (
        <div className="mx-auto mt-20 max-w-lg px-4 w-full flex flex-col gap-6">
            <div>
                <CircleUserRound />
            </div>
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-4xl text-center mb-4 text-transparent bg-clip-text">Todo App</h1>
        </div>
    );
};

export default Todos;

/*import React from "react";
import toast from "react-hot-toast";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import TickIcon from "./icons/TickIcon";
import useSWR from "swr";
import { CircleUserRound } from "lucide-react";

const fetcher = (url, options = {}) =>
  fetch(url, {
    method: options.method || "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    mode: "cors",
    body: options.body ? JSON.stringify(options.body) : undefined,
  }).then((res) => res.json());

const Todos = () => {
  const { data, error, mutate, isLoading } = useSWR(
    "http://localhost:3000/api/todos",
    fetcher
  );

  if (error) {
    return <h1 className="text-2xl py-2 text-center">Something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1 className="text-2xl py-2 text-center">Loading...</h1>;
  }

  console.log(data);

  return (
    <div className="mx-auto mt-20 max-w-lg px-4 w-full flex flex-col gap-6">
        <div>
            <CircleUserRound />
        </div>
        <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-4xl text-center mb-4 text-transparent bg-clip-text">Todo App</h1>
    </div>
  );
};

export default Todos;*/