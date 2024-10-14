"use client";

import Form from "@/components/helpers/form";
import List from "@/components/helpers/list";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  function createPersonHandler(personData) {
    setData((prevData) => [...prevData, personData]);
  }

  function deletePersonHandler(id) {
    setData((prevData) => prevData.filter(person => person.id !== id));
  }

  return (
    <div className="mx-12 p-8 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        <div className="basis-4/4 m-4 p-4 shadow-lg">
          <Form onCreatePerson={createPersonHandler} />
        </div>
        <div className="basis-1/4">
          <List data={data} onDeletePerson={deletePersonHandler}  />
        </div>
      </main>
    </div>
  );
}
