import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export default function WorkExperience() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      <ExperienceItem
        title="Creative Manager"
        company="Eand (StarzOn AVOD service)"
        location="Dubai"
        period="April 2024 - Present"
        responsibilities={[
          "Spearhead the creation of high-impact performance ads, including video and static content, for StarzOn's AVOD platform.",
          "Optimize ad creatives for various digital channels, ensuring maximum performance and ROI for the StarzOn service.",
          "Collaborate with cross-functional teams to align performance ad strategies with overall brand objectives and AVOD audience preferences.",
        ]}
      />
      <ExperienceItem
        title="Creative Specialist"
        company="Disney+ MENA"
        location="Dubai"
        period="August 2022 - April 2024"
        responsibilities={[
          "Created and localized marketing materials for Disney+ titles, including artworks and videos for social media, ads, and TV/Cinema commercials.",
          'Sole creator of assets for the most successful Disney+ campaign in EMEA region, "This is Disney+".',
          "Executed post-production for TV commercials and adaptations.",
          "Crafted out-of-home artworks for placements in UAE and KSA.",
        ]}
      />
      <ExperienceItem
        title="Motion Graphics Expert"
        company="Intigral (STC Subsidiary)"
        location="Dubai"
        period="August 2011 – October 2021"
        responsibilities={[
          "Created motion graphics, promos & social media ads for various video solutions.",
          "Produced and shot videos for OTT and IPTV platforms.",
        ]}
      />
      <ExperienceItem
        title="Motion Graphics Designer"
        company="Orient-TV"
        location="Dubai"
        period="2010 – August 2011"
        responsibilities={[
          "Designed and produced TV idents, promos, bumpers, show openers, and on-air graphics.",
          "Developed broadcast packages with consistent visual elements.",
        ]}
      />
    </section>
  );
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">
        {company} | {location} | {period}
      </p>
      <ul className="list-disc pl-5 mt-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
