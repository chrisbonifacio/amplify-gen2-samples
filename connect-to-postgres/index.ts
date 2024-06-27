import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

type EagerTodoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly content?: string | null;
  readonly isDone?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyTodoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly content?: string | null;
  readonly isDone?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type TodoModel = LazyLoading extends LazyLoadingDisabled
  ? EagerTodoModel
  : LazyTodoModel;

export declare const TodoModel: (new (
  init: ModelInit<TodoModel>
) => TodoModel) & {
  copyOf(
    source: TodoModel,
    mutator: (draft: MutableModel<TodoModel>) => MutableModel<TodoModel> | void
  ): TodoModel;
};

const { Todo } = initSchema(schema) as {
  Todo: PersistentModelConstructor<TodoModel>;
};

export { Todo };
