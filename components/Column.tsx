"use client";
import { Droppable } from "react-beautiful-dnd";
import { TodoList } from "@/utils/data";

import { Card } from "./Card";

interface Column {
  col: TodoList;
}

export function Column({ col }: Column) {
  const { id, list } = col;

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col gap-y-7">
          {list.map((column, index) => (
            <li key={column.title}>
              <Card
                draggableId={id}
                index={index}
                title={column.title}
                content={column.content}
                tags={column.tags}
                className="animate-card-fade-in"
                style={{ animationDelay: `${300 + index * 200}ms `, animationFillMode: "both" }}
              />
            </li>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
