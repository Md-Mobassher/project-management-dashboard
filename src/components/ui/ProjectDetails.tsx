import { TProject } from "@/type";
import Image from "next/image";

const ProjectDetails = ({
  id,
  name,
  description,
  deadline,
  status,
  image,
  tasks,
}: TProject) => {
  return (
    <div className="border rounded-lg lg:p-8 p-5">
      <div className="lg:flex md:flex justify-evenly items-start gap-10">
        <div className="lg:w-[50%] md:w-[50%] w-full mx-auto">
          <Image
            src={image}
            alt={name}
            width={500}
            height={400}
            className="rounded-lg border"
          />
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-full mt-5 mx-auto">
          <h3 className="font-semibold text-xl text-blue-500 mb-1">
            <span className="text-blue-500">Name:</span> {name}
          </h3>
          <p className="my-2">
            <span className=" font-semibold">Description:</span> {description}
          </p>
          <p className=" font-semibold my-4">
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
          <div className="mt-5 flex flex-wrap gap-3 ">
            <button className="px-5 py-2 border border-yellow-600 rounded-md hover:bg-yellow-500 hover:text-white">
              Edit
            </button>
            <button className="px-5 py-2 border border-red-600 rounded-md hover:bg-red-500 hover:text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg p-5 mt-10">
        {tasks &&
          tasks.map((task) => (
            <div key={task.id}>
              <h3 className="font-semibold text-xl text-blue-500 mb-1">
                <span className="text-blue-500">Task Title:</span> {task.title}
              </h3>
              <p className="my-2">
                <span className=" font-semibold">Task Description:</span>{" "}
                {task.description}
              </p>

              <p className="my-2">
                <span className=" font-semibold"> Task Deadline:</span>{" "}
                {task.deadline}
              </p>
              <p className=" font-semibold my-4">
                Task Status:{" "}
                {status === "Pending" && (
                  <span className="bg-yellow-200 rounded-full  px-2 py-1 ">
                    {task.status}
                  </span>
                )}
                {status === "In-Progress" && (
                  <span className="bg-red-200  px-2 py-1 rounded-full">
                    {task.status}
                  </span>
                )}
                {status === "Completed" && (
                  <span className="bg-green-200  px-2 py-1 rounded-full">
                    {task.status}
                  </span>
                )}
              </p>

              <div className="border rounded-lg py-5 px-2">
                <h3 className="font-semibold text-xl text-blue-500 mb-1 text-center mb-5">
                  <span className="text-blue-500 ">Assigned To</span>
                </h3>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 px-2">
                  {task.assignedTo.map((member) => (
                    <div
                      key={member.id}
                      className="shadow-md border rounded-lg px-3 py-4"
                    >
                      <p>Member ID: {member.id}</p>
                      <p>Name: {member.name}</p>
                      <p>Role: {member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
