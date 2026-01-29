import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  Zap,
  Accessibility,
  Palette,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Redesign",
    description:
      "Complete visual overhaul of your existing website with modern design principles.",
  },
  {
    icon: Globe,
    title: "Landing Page Rebuilds",
    description:
      "High-converting landing pages designed to capture leads and drive action.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimisation",
    description:
      "Responsive design that looks and works perfectly on all devices.",
  },
  {
    icon: Zap,
    title: "Speed Improvements",
    description:
      "Performance optimization for faster load times and better user experience.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Fixes",
    description:
      "WCAG-compliant updates to make your site accessible to all users.",
  },
  {
    icon: Palette,
    title: "Modern UI Refresh",
    description:
      "Updated visual elements, typography, and color schemes for a fresh look.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-heading font-bold text-foreground md:text-display-sm">
            Our services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to transform your online presence and create a
            website that works for your business.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="service-card group"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
