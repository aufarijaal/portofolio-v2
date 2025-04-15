import { Metadata } from "next";

// sections
import ContactSection from "./components/sections/ContactSection";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import SkillSection from "./components/sections/SkillSection";
import CertificateSection from "./components/sections/CertificateSection";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Aufa Rijal Portofolio",
  description: "Hello i am Aufa Rijal, a software developer from Indonesia",
};

export default async function Page() {
  const heroInfo = await client.fetch(`*[_type == "hero"][0]`);

  return (
    <>
      <div className="relative">
        <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-7xl lg:px-12">
            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-col gap-2 items-stretch">
                <h4 className="text-4xl font-bold text-gray-400">
                  {heroInfo?.greeting}
                </h4>
                <h3 className="text-5xl font-extrabold text-green-500">
                  {heroInfo?.name}
                </h3>
                <h3 className="text-5xl font-extrabold">{heroInfo?.role}</h3>
                <p className="max-w-md text-gray-500 mt-2">
                  {heroInfo?.bio}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <a href={heroInfo?.github} className="rounded-full flex gap-2 items-center bg-black hover:bg-green-500 focus:bg-cyan-500 p-1 sm:py-2 sm:px-4 text-white transition-colors duration-200 text-sm">
                    Github
                  </a>
                  <a href={heroInfo?.linkedin} className="rounded-full flex gap-2 items-center bg-black hover:bg-green-500 focus:bg-cyan-500 p-1 sm:py-2 sm:px-4 text-white transition-colors duration-200 text-sm">
                    LinkedIn
                  </a>
                  <a href={heroInfo?.instagram} className="rounded-full flex gap-2 items-center bg-black hover:bg-green-500 focus:bg-cyan-500 p-1 sm:py-2 sm:px-4 text-white transition-colors duration-200 text-sm">
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <Image width="384" height="384" src="/avatar.png" alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase */}
      <ShowcaseSection/>

      {/* Skills */}
      <SkillSection/>

      {/* Certificates */}
      <CertificateSection/>

      {/* Skills */}
      <ContactSection />
    </>
  );
}
