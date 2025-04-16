import { client } from "@/sanity/lib/client";
import React from "react";
import { Icon } from "../components/Icon";
import Image from "next/image";

async function ShowcasePage() {
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
    <div className="container my-10 min-h-screen">
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                <h5 className="text-xl">Showcase</h5>
                <h2 className="text-5xl font-bold text-green-500">
                    What I&apos;ve built
                </h2>
                </div>

                <Image width="240" height="240" src="/avatar-showcase.png" alt="" />
            </div>

            <div className="mt-10 flex flex-col gap-10">
                {projects.map((project: any, index: number) => (
                <div
                    className="project-card flex even:flex-row-reverse gap-20 justify-between pb-10 border-b"
                    key={project._key}
                >
                    <div className="project-description flex flex-col gap-2">
                    <h5 className="font-bold"></h5>
                    <h3 className="font-bold text-3xl">{project?.title}</h3>
                    <p className="text-gray-500 max-w-md">{project?.description}</p>
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
                    <img
                        className="max-w-lg max-h-60 border"
                        src={project?.imageUrl}
                        alt=""
                    />
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default ShowcasePage;
