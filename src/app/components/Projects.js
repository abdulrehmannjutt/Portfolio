import React from "react";
import Image from "next/image";
import { PROJECTS } from "../../../constants/Constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-10 lg:my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <Image
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <div className="flex flex-wrap">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <a
                  href={project?.link}
                  className="text-blue-400 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project?.linkTitle}
                </a>
              </div>
              <p
                className="mb-4 text-neutral-400"
                dangerouslySetInnerHTML={{
                  __html: project.description.replace(/\n/g, "<br/>"),
                }}
              />
              <p className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
