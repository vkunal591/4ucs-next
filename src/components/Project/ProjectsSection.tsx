// components/Projects/ProjectsSection.tsx

'use client';

import { useState } from "react";
import projectData from "./projectData";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Web App", "Mobile App", "CRM"];

const ProjectsSection = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projectData
      : projectData.filter((item) => item.filter === selected);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelected(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selected === filter
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const directions: Array<"left" | "bottom" | "right"> = ["left", "bottom", "right"];
            const direction = directions[index % directions.length];

            return (
              <ProjectCard key={project.id} project={project} direction={direction} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
    