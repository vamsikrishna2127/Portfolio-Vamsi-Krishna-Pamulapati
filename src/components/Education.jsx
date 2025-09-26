import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";
import { tesla, starbucks } from "../assets";

const EducationCard = ({
  index,
  logo,
  schoolName,
  degree,
  yearDuration,
  coursework,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 300,
        }}
        className="bg-tertiary p-5 rounded-2xl max-w-2xl mx-auto flex items-center"
      >
        {/* Logo Section */}
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={logo}
            alt={`${schoolName} Logo`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Education Info Section */}
        <div className="ml-5">
          <h3 className="text-white text-[24px] font-bold">{schoolName}</h3>
          <p className="text-secondary text-[18px]">{degree}</p>
          <p className="text-secondary text-[16px]">{yearDuration}</p>
          <p className="mt-2 text-white text-[14px]">
            Coursework: {coursework}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education = () => {
  const educationData = [
    {
      logo: "starbucks.png",
      schoolName: "University of Central Missouri",
      degree: "MSDS",
      yearDuration: "2025 - 2027",
      coursework:
        "Data Structures, Algorithms, Topics In AI, Machine Learning",
    },
    {
      logo: "tesla.png",
      schoolName: "Kalasalingam University",
      degree: "B.Tech in Computer Science",
      yearDuration: "2020 - 2024",
      coursework:
        "Data Structures, Java, OS, Dbms, AI, ML, Software Engineering, Networks",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Following My Academic Footsteps</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {education.map((education, index) => (
          <EducationCard
            key={`education-${index}`}
            index={index}
            {...education}
          />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Education, "education");
