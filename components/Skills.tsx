import React from "react";

export default function Skills() {
  const skills = [
    "After Effects",
    "Adobe",
    "Premiere",
    "Photoshop",
    "Illustrator",
    "Cinema 4D",
    "3D",
    "3ds max",
    "Unreal Engine",
    "Octane",
    "Midjourney",
    "Generative AI",
    "Stable Diffusion",
    "AI Video",
    "Python",
    "Javascript",
    "Swift",
    "HTML",
    "CSS",
    "Photography",
    "Videography",
    "Retouching",
    "Color Grading",
    "Davinci Resolve",
    "Audio Mixing & Mastering",
    "Music Production",
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-full border border-black dark:border-white text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
