import { BentoCard, BentoGrid } from "@/components/BentoGrid";

const features = [
  {
    name: "Arduino Obstacle Avoiding Car",
    description: "Built a 4WD robot car using HC-SR04 ultrasonic sensors and HW-130 motor driver.",
    href: "#",
    cta: "View Details",
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Python Utility Scripts",
    description: "Developed modular Python scripts focused on logic execution and automated workflows.",
    href: "#",
    cta: "View Code",
    className: "col-span-3 lg:col-span-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}