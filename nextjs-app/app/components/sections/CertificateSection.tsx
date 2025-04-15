import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

const CertificateSection = async () => {
    const certificates = await client.fetch(`*[_type == "certificate"]{
      _key,
      "imageUrl": image.asset->url,
    }`);

  return (
    <div className="container relative mb-20">
      <div className="mx-auto max-w-2xl py-10 lg:max-w-7xl lg:px-12 flex flex-col gap-2 rounded-md">
        <div className="flex flex-row-reverse justify-between">
          <div className="flex flex-col gap-2 text-right">
            <h5 className="text-xl">Certificates</h5>
            <h2 className="text-5xl font-bold text-green-500">
              My Achievements
            </h2>
          </div>

          <Image width="240" height="240" src="/mycertificates.png" alt="" />
        </div>

        <div className="mt-10 grid grid-cols-2 place-items-center gap-6">
          {certificates.map((certificate: any, index: number) => (
              <div className="cert-item" key={certificate._key}>
                <img
                  className="max-h-[300px]"
                  src={certificate.imageUrl}
                  alt=""
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
