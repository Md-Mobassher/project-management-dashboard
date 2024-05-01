import { TProject } from "@/type";
import useProjectStore from "@/zustand/projectStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectOverviewCard = ({
  id,
  name,
  description,
  image,
  status,
  deadline,
}: TProject) => {
  const router = useRouter();

  const handleDeleteProject = (projectId: string) => {
    const result = useProjectStore.getState().deleteProject(projectId);
    console.log(result);
  };

  const handleDetails = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className=" border shadow-lg rounded-lg mx-auto">
      <div className="w-full border-b">
        <Image
          src={image}
          alt={name}
          width={800}
          height={400}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-5 flex flex-col justify-between items-stretch">
        <div className="flex flex-wrap justify-between">
          <h3 className="font-semibold text-xl text-blue-500 mb-1">
            <span className="text-blue-500">Name:</span> {name}
          </h3>
          <p className="mt-1 mb-2">
            <span className=" font-semibold">Description:</span> {description}
          </p>
          <p className=" font-semibold">
            Status:{" "}
            {status === "Pending" && (
              <span className="bg-yellow-200 rounded-full  px-2 py-1 ">
                {status}
              </span>
            )}
            {status === "In-Progress" && (
              <span className="bg-red-200  px-2 py-1 rounded-full">
                {status}
              </span>
            )}
            {status === "Completed" && (
              <span className="bg-green-200  px-2 py-1 rounded-full">
                {status}
              </span>
            )}
          </p>
          <p>
            <span className=" font-semibold">Deadline:</span> {deadline}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 ">
          <button className="px-5 py-2 border border-yellow-600 rounded-md hover:bg-yellow-500 hover:text-white">
            Edit
          </button>

          <button className="px-5 py-2 border border-red-600 rounded-md hover:bg-red-500 hover:text-white">
            Delete
          </button>
          <button className="px-5 py-2 border border-green-500 rounded-md hover:bg-green-500 hover:text-white">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewCard;
