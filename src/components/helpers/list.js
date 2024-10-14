"use client";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

export default function List({ data, onDeletePerson }) {
  return (
    <div>
      <h1 className="text-xl">Persons List</h1>
      <h1 className="text-xl">{data.firstname}</h1>

      {data && data.length > 0 ? (
        <ul role="list" className="divide-y divide-gray-100">
          {data.map((person) => (
            <li
              key={person.id || person.email}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm leading-6 text-gray-900">
                    <span className="font-bold">Name: </span>
                    {person.firstname} {person.middlename} {person.lastname}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    <span className="font-bold">Email: </span>
                    {person.email}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    <span className="font-bold">Date of birth: </span>{" "}
                    {person.birthdate}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    <span className="font-bold">Description: </span>
                    {person.description}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    <span className="font-bold">Gender: </span>
                    {person.gender ? "Male" : "Female"}
                  </p>
                </div>
              </div>
              <div onClick={() => onDeletePerson(person.id)}>
                <RiDeleteBin6Line size={30} />
              </div>
              <div>
                <RxUpdate size={30} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No persons available.</p>
      )}
    </div>
  );
}
