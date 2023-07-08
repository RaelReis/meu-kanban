"use client";
import { ComponentProps } from "react";
import { Draggable } from "react-beautiful-dnd";

interface CardProps extends ComponentProps<"div"> {
  draggableId: string;
  index: number;
  title: string;
  content: string;
  tags: string[];
}

export function Card({ draggableId, index, title, content, tags, className, ...rest }: CardProps) {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className={`p-6 flex flex-col gap-y-3 rounded-md shadow-card cursor-pointer ${className}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          {...rest}
        >
          <h3 className="text-bold text-sm text-base-text font-bold ">{title}</h3>
          <p className="text-base-label text-sm text-ellipsis-2">{content}</p>
          <div className="flex items-center gap-x-2 ">
            {tags.map((tag) => (
              <span className="bg-purple-300 text-primary text-xs font-medium rounded-md py-1 mr px-2 lowercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
}
