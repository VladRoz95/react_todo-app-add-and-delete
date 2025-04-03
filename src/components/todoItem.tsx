/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import { Todo } from '../types/Todo';
import classNames from 'classnames';

type Props = {
  todos: Todo;
  todoStatusChange: (todos: Todo) => void;
  removeTodo: (id: number) => void;
  loadingTodo: number[];
};

export const TodoItem: React.FC<Props> = ({
  todos,
  todoStatusChange,
  removeTodo,
  loadingTodo,
}) => {
  const onChange = () => {
    todoStatusChange({
      id: todos.id,
      title: todos.title,
      userId: todos.userId,
      completed: !todos.completed,
    });
  };

  return (
    <div
      data-cy="Todo"
      key={todos.id}
      className={classNames('todo', { completed: todos.completed })}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todos.completed}
          onChange={onChange}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todos.title}
      </span>

      {/* <form>
             <input
              data-cy="TodoTitleField"
              type="text"
              className="todo__title-field"
              placeholder="Empty todo will be deleted"
              value="Todo is being edited now"
            />
          </form> */}

      {/* Remove button appears only on hover */}
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => removeTodo(todos.id)}
      >
        ×
      </button>

      {/* overlay will cover the todo while it is being deleted or updated */}
      <div
        data-cy="TodoLoader"
        className={classNames('modal overlay', {
          'is-active': loadingTodo.includes(todos.id),
        })}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};

TodoItem.displayName = 'TodoItem';
