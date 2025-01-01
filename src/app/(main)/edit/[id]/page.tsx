import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

interface Params {
  params: Promise<{ id: string }>;
}

const getTask = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
    cache: "no-cache",
  });

  const data = await response.json();
  return data.task as TaskDocument;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EditTaskPage = async (props: Params) => {
  const params = await props.params;
  const id = params.id;
  const task = await getTask(id);
  console.log(task);
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTaskPage;
