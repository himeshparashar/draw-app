import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-white"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.15),transparent_600px),radial-gradient(circle_at_bottom_left,rgba(138,62,217,0.1),transparent_600px)]"></div>

      {/* Animated Blobs */}
      <motion.div
        className="absolute -bottom-32 -right-32 aspect-square h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-600/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-1 shadow-xl"
          >
            <div className="rounded-xl bg-white px-6 py-12 sm:px-12 sm:py-16">
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
                >
                  Ready to start creating?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8 text-lg text-gray-600"
                >
                  Join thousands of users who are already creating beautiful
                  diagrams with DrawApp.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-medium text-white shadow-xl shadow-indigo-500/20 transition-all hover:shadow-indigo-500/40 sm:w-auto"
                  >
                    Get Started — It&apos;s Free
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-500 sm:w-auto"
                  >
                    View Demo
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-sm text-gray-500"
          >
            <p>Trusted by teams at</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {/* Placeholder company logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-24 rounded-md bg-gray-200"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
