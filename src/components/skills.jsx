import React from "react";
import { Code2, Monitor, Wrench, DatabaseIcon } from "lucide-react";

const skillsData = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "Python", value: 95 },
      { name: "C", value: 70 },
      { name: "Java", value: 70 },
     
    ],
  },
  {
    title: "Web Development",
    icon: <Monitor className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "HTML", value: 95 },
      { name: "CSS", value: 90 },
      { name: "JavaScript", value: 85 },
      { name: "React.js", value: 82 },
      { name: "Node.js", value: 80 },
      { name: "Express.js", value: 80 },
      { name: "Django", value: 80 },
    ],
  },
  {
    title: "Databases",
    icon: <DatabaseIcon className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "SQL", value: 94 },
      { name: "MySQL", value: 90 },
      { name: "PostgreSQL", value: 82 },
      { name: "MongoDB", value: 80 },
    
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "VS Code", value: 95 },
      { name: "Git", value: 85 },
  
    ],
  },
];

const ProgressBar = ({ value }) => (
  <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
    <div
      className="h-full rounded-full bg-linear-to-r from-blue-900 to-blue-500"
      style={{ width: `${value}%` }}
    />
  </div>
);

const SkillCard = ({ title, icon, items, highlight }) => (
  <div
    className={`relative rounded-2xl p-6 
    shadow-lg transition-all duration-300
    hover:-translate-y-1 hover:shadow-blue-500/20
   
    ${highlight ? "border-red-500/30" : ""}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-full bg-orange-500/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>

    <div className="space-y-4">
      {items.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-neutral-200">{skill.name}</span>
            <span className="text-blue-200 font-medium">
              {skill.value}%
            </span>
          </div>
          <ProgressBar value={skill.value} />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="relative min-h-screen px-6 py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="absolute -top-10 left-0 right-0 mx-auto text-center text-[15vw] 
        leading-none font-black tracking-tighter bg-linear-to-b from-blue-400 to-transparent 
        bg-clip-text text-transparent 
        select-none pointer-events-none z-0">
          <span className="tracking-wide">SKILLS</span>
      </h1>

      
        <div className="grid gap-8 mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((card, index) => (
            <SkillCard
              key={index}
              {...card}
              highlight={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
