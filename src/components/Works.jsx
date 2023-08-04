import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl select-none"
        />

        
      </div>

     
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2 select-none">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}></p>
        <h2 className={`${styles.sectionHeadText}`}>Referanslar.</h2>

        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Tüm yazılım talepleriniz için yüksek teknolojilerle size özel yazılım çözümleri üretiyoruz.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-7 justify-center">
          {projects.map((project) => (
            <ProjectCard key={`project-${project.name}`} {...project} />
          ))}
        </div>

        
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");
