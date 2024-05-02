"use client";
import Loading from "@/components/shared/Loading";
import ProjectCard from "@/components/ui/ProjectCard";
import Title from "@/components/ui/Title";
import { TProject } from "@/type";
import useProjectStore, { useProjects } from "@/zustand/projectStore";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  const { projects, isLoading, isError } = useProjects();
  // let projects = useProjectStore((state) => state.projects);

  // if (!projects) {
  //   return <Loading />;
  // }
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <Title firstTitle="Welcome To" lastTitle="Project Management" />
      {isError && (
        <div className="text-red-500 text-center my-10">
          Error fetching projects
        </div>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-10">
            {projects.slice(0, 2).map((project: TProject) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10">
            {projects.slice(2, 5).map((project: TProject) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="flex justify-center items-center my-14">
            <Link href="/projects">
              <button className="px-5 py-2 border border-blue-600 bg-blue-400 rounded-md hover:bg-blue-500 text-white">
                View All Projects
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
