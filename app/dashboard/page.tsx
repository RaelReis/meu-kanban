"use client";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { Column } from "@/components/Column";
import { data as initialColumns } from "@/utils/data";

export default function Dashboard() {
  const [columns, setColumns] = useState(initialColumns);

  function onDragEnd({ source, destination }: DropResult) {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (source.droppableId === destination.droppableId && destination.index === source.index)
      return null;

    // Set start and end variables
    const start = columns[source.droppableId as "todo" | "doing" | "done"];
    const end = columns[destination.droppableId as "todo" | "doing" | "done"];

    const a = source.droppableId;

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_: any, idx: number) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_: any, idx: number) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  }

  return (
    <main className="h-screen bg-primary flex overflow-hidden">
      <div className="text-white max-w-[184px]">
        <div className="max-w-[56px] m-9">
          <img src="logo.svg" alt="Kanban Logo" />
        </div>
        <nav className="mt-11">
          <ul className="flex flex-col">
            <li className="p-4 px-9 cursor-pointer flex items-center gap-x-4 opacity-80 hover:opacity-100 duration-300">
              <img src="tablet-portrait.svg" alt="" />
              <span>Boards</span>
            </li>
            <li className="p-4 px-9 cursor-pointer flex items-center gap-x-4 opacity-80 hover:opacity-100 duration-300">
              <img src="people.svg" alt="" />
              <span>Equipes</span>
            </li>
            <li className="p-4 px-9 cursor-pointer flex items-center gap-x-4 opacity-80 hover:opacity-100 duration-300">
              <img src="document-text.svg" alt="" />
              <span>Relatórios</span>
            </li>
            <li className="p-4 px-9 cursor-pointer flex items-center gap-x-4 opacity-80 hover:opacity-100 duration-300">
              <img src="cog.svg" alt="" />
              <span>Ajustes</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 mt-2 bg-white rounded-tl-3xl animate-right-to-left p-14">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-base-text">Meu Kanban</h1>
          <div className="rounded-full w-16 h-16 bg-primary">
            <img src="" alt="" />
          </div>
        </div>

        {/* Filter  */}
        <div className="flex items-center gap-x-4 my-8">
          <button className="bg-primary rounded-md py-3 px-8 text-white">Filtrar</button>
          <input
            type="text"
            placeholder="Busque por cards, assuntos ou responsáveis..."
            className="flex-1 border border-base-border py-3 px-6 rounded-lg shadow-input"
          />
        </div>

        {/* Content */}
        <div className="flex gap-x-24">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.values(columns).map((col) => (
              <div key={col.id} className="flex-1">
                <h2 className="text-base-text text-xl font-bold py-6">{col.title}</h2>
                <Column col={col} />
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    </main>
  );
}
