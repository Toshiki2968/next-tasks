"use client";

import { useActionState } from "react";
import { createTask, FormState } from "@/actions/task";
import { useFormStatus } from "react-dom";

const NewTaskForm = () => {
  const initialState: FormState = { error: "" };
  const [state, formAction] = useActionState(createTask, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bh-gray-700 text-sm font-semibold shadow-sm disanabled:bg-gray-400"
      >
        Create
      </button>
    );
  };
  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div className="mt-6">
          <label htmlFor="'title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block mt-2py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="'description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="block mt-2py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>

        <div className="mt-6">
          <label htmlFor="'dueDate" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            required
            className="block mt-2py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <SubmitButton />
      </form>
      {state.error && (
        <p className="mt-2 text-red-500 text-sm">{state.error}</p>
      )}
    </div>
  );
};

export default NewTaskForm;
