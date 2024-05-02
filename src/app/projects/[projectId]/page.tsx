"use client";

import Loading from "@/components/shared/Loading";
import CreateTaskModal from "@/components/ui/CreateTaskModal";
import EditProjectModal from "@/components/ui/EditProjectModal";
import EditTaskModal from "@/components/ui/EditTaskModal";
import Title from "@/components/ui/Title";
import { ProjectFormData, TaskFormData, TParams, TProject } from "@/type";
import useProjectStore from "@/zustand/projectStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const ProjectDetailPage = ({ params }: TParams) => {
  const router = useRouter();
  // const addTask = useProjectStore((state) => state.addTask);
  /* modal */
  const [isEditProjectModalVisible, setIsEditProjectModalVisible] =
    useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [isCreateTaskModalVisible, setIsCreateTaskModalVisible] =
    useState(false);

  /* get project by id */
  let project = useProjectStore((state) => state.singleProject);

  if (!project) {
    return <Loading />;
  }

  const { id, name, description, deadline, status, image, tasks } =
    project as TProject;

  /* edit project */
  const handleEditProject = (values: ProjectFormData) => {
    console.log(values);
    toast.success("Project Edited Successfull");
    setIsEditProjectModalVisible(false);
  };

  const handleCancelEdit = () => {
    setIsEditProjectModalVisible(false);
  };

  /* create task */
  const handleCreateTask = (values: TaskFormData) => {
    console.log(values);
    toast.success("Task Added Successfully");
    setIsCreateTaskModalVisible(false);
  };

  const handleCancel = () => {
    setIsCreateTaskModalVisible(false);
  };

  /* Edit task */

  const handleEditTask = (values?: TaskFormData) => {
    console.log(values);
    toast.success("Task Edited Successfull");
    setIsEditTaskModalVisible(false);
  };

  const handleCancelEditTask = () => {
    setIsEditTaskModalVisible(false);
  };

  /* delete */
  const handleDeleteProject = (id: string) => {
    useProjectStore.getState().deleteProject(id);
    toast.success("Deleted successfully!");
    router.push("/projects");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <Title firstTitle="Projects" lastTitle="Details" />

      <div className=" my-10">
        {project && (
          <div className="">
            <div className="lg:flex md:flex justify-between items-stretch gap-8 border rounded-lg p-5 shadow-md">
              <div className="lg:w-[50%] md:w-[50%] w-full mx-auto border rounded-lg flex">
                <Image
                  src={image}
                  alt={name}
                  width={650}
                  height={400}
                  className="rounded-lg border flex"
                />
              </div>
              <div className="lg:w-[50%] md:w-[50%] w-full lg:mt-0 mt-5 mx-auto border rounded-lg p-5">
                <h3 className="font-semibold text-xl text-blue-500 mb-1">
                  <span className="text-blue-500">Name:</span> {name}
                </h3>
                <p className="my-2">
                  <span className=" font-semibold">Description:</span>{" "}
                  {description}
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

                {/* button */}
                <div className="mt-5 flex flex-wrap gap-3 ">
                  <button
                    className="px-5 py-2 border border-yellow-600 rounded-md hover:bg-orange-500 hover:text-white"
                    onClick={() => setIsEditProjectModalVisible(true)}
                  >
                    Edit
                  </button>
                  <EditProjectModal
                    initialData={project}
                    projectId={params.projectId}
                    visible={isEditProjectModalVisible}
                    onCreate={handleEditProject}
                    onCancel={handleCancelEdit}
                  />
                  <button
                    className="px-4 py-2 border border-red-600 rounded-md hover:bg-red-500 hover:text-white"
                    onClick={() => handleDeleteProject(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-5 py-2 border border-green-500 rounded-md hover:bg-green-500 hover:text-white"
                    onClick={() => setIsCreateTaskModalVisible(true)}
                  >
                    Add Task
                  </button>
                  <CreateTaskModal
                    projectId={id}
                    visible={isCreateTaskModalVisible}
                    onCreate={handleCreateTask}
                    onCancel={handleCancel}
                  />
                </div>
              </div>
            </div>
            <div className=" mt-8 grid lg:grid-cols-2 grid-cols-1 mx-auto gap-8 border rounded-lg p-5">
              {tasks &&
                tasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4">
                    <div className="flex  justify-between items-start gap-2 mb-4">
                      <div className="w-[80%]">
                        <h3 className="font-semibold text-xl text-blue-500 mb-1">
                          <span className="text-blue-500">Task Title:</span>{" "}
                          {task.title}
                        </h3>
                        <p className="my-2">
                          <span className=" font-semibold">
                            Task Description:
                          </span>{" "}
                          {task.description}
                        </p>

                        <p className="my-2">
                          <span className=" font-semibold">
                            {" "}
                            Task Deadline:
                          </span>{" "}
                          {task.deadline}
                        </p>
                        <p className=" font-semibold mt-3 mb-6">
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
                      </div>
                      <div>
                        <button
                          className="px-3 py-2 border border-yellow-600 rounded-md hover:bg-orange-500 hover:text-white"
                          onClick={() => setIsEditTaskModalVisible(true)}
                        >
                          Edit Task
                        </button>
                        <EditTaskModal
                          // initialTaskData={initialTaskValues}
                          projectId={id}
                          taskId={task.id}
                          visible={isEditTaskModalVisible}
                          onCreate={handleEditTask}
                          onCancel={handleCancelEditTask}
                        />
                      </div>
                    </div>

                    <hr />
                    <div
                      className=" py-4
              "
                    >
                      <h3 className="font-semibold text-xl text-blue-500 text-center mb-5">
                        <span className="text-blue-500 ">Assigned To</span>
                      </h3>

                      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 ">
                        {task.assignedTo?.map((member) => (
                          <div
                            key={member.id}
                            className="shadow-lg border rounded-lg px-4 py-5"
                          >
                            <p>Member ID: {member.id}</p>
                            <p className="my-1">Name: {member.name}</p>
                            <p>Role: {member.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
