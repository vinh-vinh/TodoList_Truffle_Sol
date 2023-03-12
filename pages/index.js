import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { address } from "@truffle/contract/lib/contract/properties";
import { useEffect, useState } from "react";
import { load } from "../src/funcs";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [addressAccount, setAddresAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => setInput(e.currentTarget.value);
  const handleAddTask = async () => {
    await contract.createTask(input, { from: addressAccount });
    setInput("");
    setRefresh(true);
  };
  const handleToggled = async (id) => {
    await contract.toggleCompleted(id, { from: addressAccount });
    setRefresh(true);
  };

  useEffect(() => {
    if (!refresh) return;
    setRefresh(false);
    load().then((e) => {
      setAddresAccount(e.addressAccount);
      setTasks(e.tasks);
      setContract(e.todoContract);
    });
  }, []);
  return (
    <div className="flex flex-col justify-between  items-center ">
      <h1 className="text-2xl ">BlockChain TodoList</h1>
      <div className="w-100 h-40">
        <input value={input} onChange={handleInputChange} />
        <button className="p-5 bg-red-400" onClick={handleAddTask}>
          Done
        </button>
      </div>

      <div>
        <h1>Todo</h1>
        {tasks == null ? (
          <h1>Dont Have tasks</h1>
        ) : (
          tasks.map((task, idx) =>
            !task[2] ? (
              <div key={idx}>
                <span>{task[1]}</span>
                <button
                  className="px-5 ml-1 bg-rose-500"
                  onClick={() => handleToggled(task[0].toNumber())}
                >
                  Done
                </button>
              </div>
            ) : null
          )
        )}
      </div>

      <div>
        <h1>Task Done</h1>
        {tasks == null ? (
          <h1>Task Doneeeee</h1>
        ) : (
          tasks.map((task, idx) =>
            task[2] ? (
              <div key={idx}>
                <span>{task[1]}</span>
                <button
                  className="px-5 ml-1 bg-rose-500"
                  onClick={() => handleToggled(task[0].toNumber())}
                >
                  UnDone
                </button>
              </div>
            ) : null
          )
        )}
      </div>
    </div>
  );
}
