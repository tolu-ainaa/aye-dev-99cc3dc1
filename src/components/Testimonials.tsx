import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Aye-Dev transformed our old site in days. The new design perfectly captures our brand and has significantly improved how customers perceive our business.",
    author: "Sarah Chen",
    role: "Owner, Wellness Clinic",
  },
  {
    quote:
      "Our bookings increased by 40% after the redesign. The modern look and improved user experience made all the difference.",
    author: "Marcus Johnson",
    role: "Manager, Downtown Bistro",
  },
  {
    quote:
      "The team was professional, fast, and delivered exactly what we needed. Our website finally represents the quality of our work.",
    author: "Elena Rodriguez",
    role: "Director, Legal Consultancy",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-heading font-bold text-foreground md:text-display-sm">
            What our clients say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real results from businesses that trusted us with their website
            transformation.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card relative"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <blockquote className="mb-6 text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
