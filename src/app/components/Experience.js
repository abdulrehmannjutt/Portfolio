import React from 'react'
import { EXPERIENCES } from '../../../constants/Constants';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year Section */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 mt-[2.5px] text-sm text-neutral-400">{experience.year}</p>
            </div>

            {/* Experience Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>

              {/* Experience Description */}
              <p
                className="mb-4 text-neutral-400"
                dangerouslySetInnerHTML={{
                  __html: experience.description.replace(/\n/g, "<br/>"),
                }}
              />

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-neutral-800 text-white rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience