import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: "no-cache",
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const ExpiredTaskPage = async () => {
  const ExpiredTasks = await getExpiredTasks();
  return (
    <div className="text-gray-800 p-8 overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {ExpiredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredTaskPage;
