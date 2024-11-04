import React from 'react';

export default function SkillsPage() {
  const skills = [
    { name: 'HTML', level: '95%' },
    { name: 'CSS', level: '90%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'React', level: '60%' },
    { name: 'Node.js', level: '65%' },
    { name: 'MongoDB', level: '60%' },
    { name: 'Tailwind CSS', level: '82%' },
    { name: 'TypeScript', level: '70%' },
  ];

  return (
    <div className="container mx-auto my-12" id="skills">
      <h1 className="text-5xl font-bold text-center mb-12">My Skills</h1>
      <p className="text-lg text-center text-[#f0f0e6] mb-8">
          My name is Ali Raza, a passionate web developer with expertise in 
          HTML, CSS, JavaScript, TypeScript, Node.js, Express.js, and MongoDB. 
          I also specialize in AI chatbot development, utilizing tools like 
          Langchain, Flowise, Dialogflow, and Twilio to create intelligent and 
          responsive solutions. I am dedicated to building seamless user experiences 
          and leveraging technology to solve real-world problems.
        </p>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="text-gray-400 mb-2">
              <span className="text-xl font-medium">{skill.name}</span>
            </div>
            <div className="relative h-2.5 bg-gray-200 rounded">
              <div
                className="absolute h-full bg-blue-600 rounded"
                style={{ width: skill.level }}
              />
            </div>
            <div className="text-right text-sm text-gray-500">
              {skill.level}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
