import Link from "next/link";
import React from "react";
import { Icon } from "../Icon";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const ShowcaseSection = async () => {
  const projects = await client.fetch(`*[_type == "showcase"]{
    _key,
    title,
    description,
    "imageUrl": image.asset->url,
    technologies[]->{
      _key,
      name,
      icon
    }
  }`);

  return (
    <div className="container relative mb-20">
      <div className="mx-auto max-w-2xl py-10 lg:max-w-7xl lg:px-12 bg-white border border-gray-50 backdrop-blur-sm flex flex-col gap-2 rounded-md">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h5 className="text-xl">Showcase</h5>
            <h2 className="text-5xl font-bold text-green-500">
              What I&apos;ve built
            </h2>
          </div>

          <Image width="240" height="240" src="/avatar-showcase.png" alt="" />
        </div>

        <div className="mt-10 flex flex-col gap-20">
          {projects.map((project: any, index: number) => (
            <div
              className="project-card flex even:flex-row-reverse gap-20 justify-between"
              key={project._key}
            >
              <div className="project-description flex flex-col gap-2">
                <h5 className="font-bold"></h5>
                <h3 className="font-bold text-3xl">{project?.title}</h3>
                {/* <p className="text-gray-500 max-w-md">{project?.description}</p> */}
                <div className="mt-2">
                  <ul className="flex gap-6">
                    {project.technologies.map((tech: any, index: number) => (
                      <li key={tech._key} title={tech.name}>
                        <Icon icon={tech.icon} width="36" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-image">
                <img className="max-w-lg" src={project?.imageUrl} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 mx-auto">
          <Link
            href="/projects"
            className="rounded-full flex gap-2 items-center bg-black hover:bg-green-500 focus:bg-cyan-500 p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200 w-max"
          >
            See all projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
