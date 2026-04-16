import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import beforeMedical from "@/assets/before-medical.png";
import afterMedical from "@/assets/after-medical.png";
import beforeRestaurant from "@/assets/before-restaurant.jpg";
import afterRestaurant from "@/assets/after-restaurant.jpg";
import beforeConsultancy from "@/assets/before-consultancy.jpg";
import afterConsultancy from "@/assets/after-consultancy.jpg";
import beforeFitness from "@/assets/before-fitness.jpg";
import afterFitness from "@/assets/after-fitness.jpg";

const projects = [
  {
    industry: "Healthcare",
    title: "Medical Clinic",
    before: beforeMedical,
    after: afterMedical,
    changes: [
      "Simplified navigation and booking flow",
      "Modern, trustworthy visual design",
    ],
  },
  {
    industry: "Restaurant",
    title: "Local Restaurant",
    before: beforeRestaurant,
    after: afterRestaurant,
    changes: [
      "Beautiful food photography showcase",
      "Mobile-first reservation system",
    ],
  },
  {
    industry: "Professional Services",
    title: "Business Consultancy",
    before: beforeConsultancy,
    after: afterConsultancy,
    changes: [
      "Clear value proposition messaging",
      "Premium, sophisticated aesthetics",
    ],
  },
  {
    industry: "Fitness",
    title: "Fitness Studio",
    before: beforeFitness,
    after: afterFitness,
    changes: [
      "Energetic, motivating design",
      "Easy class booking integration",
    ],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="project-card group overflow-hidden rounded-3xl bg-card"
    >
      {/* Before/After Images */}
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-muted"
        onClick={() => setShowAfter(!showAfter)}
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        {/* Before Image */}
        <img
          src={project.before}
          alt={`${project.title} before redesign`}
          className={`absolute inset-0 h-full w-full object-contain p-[150px] transition-opacity duration-500 ${showAfter ? "opacity-0" : "opacity-100"}`}
        />
        {/* After Image */}
        <img
          src={project.after}
          alt={`${project.title} after redesign`}
          className={`absolute inset-0 h-full w-full object-contain p-[150px] transition-opacity duration-500 ${showAfter ? "opacity-100" : "opacity-0"}`}
        />
        {/* Labels */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className={`rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-opacity ${showAfter ? "opacity-0" : "opacity-100"}`}>
            Before
          </span>
          <span className={`rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground transition-opacity ${showAfter ? "opacity-100" : "opacity-0"}`}>
            After
          </span>
        </div>
        {/* Tap/Hover instruction */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="md:hidden">Tap to reveal</span>
          <span className="hidden md:inline">Hover to reveal</span>
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {project.industry}
        </div>
        <h3 className="mb-4 text-xl font-bold text-foreground">
          {project.title}
        </h3>
        <ul className="space-y-2">
          {project.changes.map((change, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {change}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-heading font-bold text-foreground md:text-display-sm">
            Recent redesigns
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See how we transform outdated websites into modern, high-converting
            experiences. Hover over each project to see the before and after.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
