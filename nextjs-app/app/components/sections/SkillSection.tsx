import React from "react";
import { Icon } from "../Icon";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const SkillSection = async () => {
  const skills = await client.fetch(`*[_type == "skill"][show == true]{
    _key,
    name,
    icon,
  }`);

  return (
    <div id="skills-section" className="container relative mb-20">
      <div className="mx-auto max-w-2xl py-10 lg:max-w-7xl lg:px-12 flex flex-col gap-2 rounded-md">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h5 className="text-xl">Skills</h5>
            <h2 className="text-5xl font-bold text-green-500">
              Technologies I use
            </h2>
          </div>

          <Image width="240" height="240" src="/crossed-hands.png" alt="" />
        </div>

        <div className="mt-10 grid grid-cols-5 place-items-center gap-6">
          {skills.map((skill: any, index: number) => (
            <div className="skill-item" key={skill._key}>
              <div className="relative w-[150px] h-[150px]">
                <svg
                  className="text-gray-50 absolute top-0 left-0"
                  width="150"
                  height="150"
                  viewBox="0 0 230 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 106.26C0 29.67 29.67 0 106.26 0H123.74C200.33 0 230 29.67 230 106.26V123.74C230 200.33 200.33 230 123.74 230H106.26C29.67 230 0 200.33 0 123.74V106.26Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Icon icon={skill.icon} width="64" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
