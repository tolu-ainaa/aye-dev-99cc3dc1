import { motion } from "framer-motion";
import { Search, Paintbrush, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "We find websites that look outdated",
    description:
      "Our team identifies businesses with websites that could benefit from a modern refresh. We look for opportunities where a redesign could significantly improve user experience and conversions.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "We redesign the homepage for free as a preview",
    description:
      "We create a complete homepage redesign mockup at no cost. This gives you a clear vision of what your new website could look like, with no strings attached.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "You approve, then we rebuild the full site",
    description:
      "If you love the preview, we'll build out the complete website. You get a modern, responsive site that converts visitors into customers.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-heading font-bold text-foreground md:text-display-sm">
            How it works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our simple three-step process makes getting a new website easy and
            risk-free.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-7 hidden h-px w-full bg-gradient-to-r from-border via-primary/30 to-border md:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="step-number relative mb-6">
                  <step.icon className="h-6 w-6" />
                </div>

                {/* Step number badge */}
                <div className="mb-4 text-sm font-bold text-primary">
                  Step {step.number}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
