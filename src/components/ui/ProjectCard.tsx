import { TProject } from "@/type";
import useProjectStore from "@/zustand/projectStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  status,
  deadline,
}: TProject) => {
  const setSingleProject = useProjectStore((state) => state.setSingleProject);
  const router = useRouter();

  const handleDetails = (id: string) => {
    setSingleProject(id);
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
      <div className="p-5 flex flex-col justify-stretch items-stretch ">
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
        <div className="mt-6">
          <button
            className="px-5 py-2 border border-blue-600 rounded-md hover:bg-blue-500 hover:text-white"
            onClick={() => handleDetails(id)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
