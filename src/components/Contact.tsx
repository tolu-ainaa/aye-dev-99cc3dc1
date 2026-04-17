import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const SHEETS_WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbxS4lytGQ8Q7T-Vj4O-dhNFCbw-xQCCGXQUD8qKGUbn6ZSQiljlI1bok0_VkVWvZJOsLQ/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
          mode: "no-cors",
        body: JSON.stringify(formData),
      });

      // With no-cors, we assume success after the request completes
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you with a redesign concept soon.",
      });
    } catch (err) {
      console.error("Form submission failed:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-xl text-center"
          >
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h2 className="mb-4 text-heading font-bold text-foreground">
              Thank you!
            </h2>
            <p className="text-lg text-muted-foreground">
              We've received your message and will send you a redesign concept
              for your website within the next few days.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center md:mb-12"
          >
            <h2 className="mb-4 text-heading font-bold text-foreground md:text-display-sm">
              Get a modern redesign concept
            </h2>
            <p className="text-lg text-muted-foreground">
              Send your website. Get a modern redesign concept — completely
              free, no strings attached.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="website"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Website URL
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="form-input resize-none"
                placeholder="Tell us about your business or any specific goals for your website..."
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  Send my website
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              We'll review your site and send you a redesign concept within 48
              hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
