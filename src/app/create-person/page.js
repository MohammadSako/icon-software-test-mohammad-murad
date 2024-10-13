import Form from "@/components/helpers/form";
import React from "react";

function CreatePerson() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form />
      </main>
    </div>
  );
}

export default CreatePerson;
