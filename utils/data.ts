export interface Data {
  todo: TodoList;
  doing: TodoList;
  done: TodoList;
}

export type TodoList = {
  id: string;
  title: string;
  list: Todo[];
};

type Todo = {
  title: string;
  content: string;
  tags: string[];
};

export const data: Data = {
  todo: {
    id: "todo",
    title: "A fazer",
    list: [
      {
        title: "#boraCodar um Kanban",
        content:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tags: ["react", "typescript"],
      },
      {
        title: "#boraCodar",
        content:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tags: ["react", "typescript"],
      },
      {
        title: "#Kanban",
        content:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tags: ["react", "typescript"],
      },
    ],
  },
  doing: {
    id: "doing",
    title: "Fazendo",
    list: [],
  },
  done: {
    id: "done",
    title: "Feito",
    list: [],
  },
};
