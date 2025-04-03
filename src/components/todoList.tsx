import { TodoItem } from './todoItem';
import { Todo } from '../types/Todo';
import React from 'react';

type Props = {
  filteredTodo: Todo[];
  todoStatusChange: (todos: Todo) => void;
  removeTodo: (id: number) => void;
  loadingTodo: number[];
};

export const TodoList: React.FC<Props> = ({
  filteredTodo,
  todoStatusChange,
  removeTodo,
  loadingTodo,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodo.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todoStatusChange={todoStatusChange}
            removeTodo={removeTodo}
            todos={todo}
            loadingTodo={loadingTodo}
          />
        );
      })}
    </section>
  );
};

TodoList.displayName = 'TodoList';
