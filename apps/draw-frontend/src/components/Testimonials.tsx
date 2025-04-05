import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "DrawApp has completely transformed how our team collaborates on design projects. The intuitive interface and hand-drawn style adds a personal touch to our diagrams.",
    author: "Sarah Johnson",
    role: "Product Designer at TechCorp",
  },
  {
    content:
      "I've tried many drawing tools, but DrawApp stands out for its simplicity and power. It's perfect for creating flowcharts and system diagrams that look professional yet approachable.",
    author: "Michael Chen",
    role: "Software Engineer at DevWorks",
  },
  {
    content:
      "As a teacher, I use DrawApp daily to create engaging visual content for my students. The export options make it easy to share my diagrams across different platforms.",
    author: "Emily Rodriguez",
    role: "Education Specialist",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative bg-white py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.02)_25%,rgba(168,85,247,0.02)_75%,transparent)]"></div>
      <div className="absolute right-0 top-0 -z-10 h-64 w-64 -translate-y-16 translate-x-16 rounded-full bg-indigo-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 translate-y-16 -translate-x-16 rounded-full bg-purple-50 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          >
            What People Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Join thousands of satisfied users who have transformed their
            creative process with DrawApp.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative rounded-xl bg-white p-6 shadow-lg"
            >
              {/* Decorative quote mark */}
              <div className="absolute right-6 top-6 text-4xl font-serif text-indigo-100">
                "
              </div>

              {/* Testimonial content */}
              <div className="relative z-10">
                <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <p className="mb-8 text-gray-700">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-indigo-400 to-purple-400">
                    <div className="flex h-full w-full items-center justify-center text-xs font-medium text-white">
                      {testimonial.author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#reviews"
            className="inline-flex items-center text-indigo-600"
          >
            <span>Read more testimonials</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
