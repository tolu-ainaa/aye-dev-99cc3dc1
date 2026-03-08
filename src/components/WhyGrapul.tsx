import { motion } from "framer-motion";
import { Clock, Sparkles, MessageSquare, TrendingUp } from "lucide-react";

const trustPoints = [
  {
    icon: Clock,
    title: "1-2 week turnaround",
    description:
      "Fast delivery without compromising on quality. Get your new website live quickly.",
  },
  {
    icon: Sparkles,
    title: "Modern design standards",
    description:
      "We follow the latest design trends and best practices for optimal results.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description:
      "Stay informed throughout the process with regular updates and transparent timelines.",
  },
  {
    icon: TrendingUp,
    title: "Built for conversions",
    description:
      "Every design decision is made to help you turn visitors into customers.",
  },
];

const WhyGrapul = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-heading font-bold md:text-display-sm">
            Why choose Aye-Dev
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-background/70">
            We combine speed, quality, and results-focused design to deliver
            websites that actually work for your business.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-background/10">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">{point.title}</h3>
                <p className="text-background/70">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGrapul;
