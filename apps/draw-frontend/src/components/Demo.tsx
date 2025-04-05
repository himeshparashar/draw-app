import { motion } from "framer-motion";

export const Demo = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-32 w-32 rotate-45 rounded-lg bg-indigo-500/5 blur-xl"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 -rotate-12 rounded-full bg-purple-500/5 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            See DrawApp in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A powerful yet simple drawing tool that makes creating diagrams a
            breeze.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-2xl"
          >
            {/* Mockup Browser Window */}
            <div className="bg-gray-100">
              <div className="flex items-center border-b border-gray-200 px-4 py-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto flex w-4/5 max-w-md items-center justify-center rounded-md bg-white px-4 py-1.5">
                  <div className="h-4 w-4 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">drawapp.io</span>
                </div>
              </div>

              <div className="relative h-[50vh] overflow-hidden bg-white">
                {/* Canvas grid background */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                {/* Animated drawing elements */}
                <div className="relative h-full w-full">
                  {/* Diagram Element 1 */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute left-1/4 top-1/4 flex h-32 w-48 items-center justify-center rounded-lg border-2 border-indigo-500 bg-indigo-50 text-center text-lg font-medium text-indigo-700"
                  >
                    User Input
                  </motion.div>

                  {/* Diagram Element 2 */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute left-1/2 top-1/2 flex h-32 w-48 items-center justify-center rounded-lg border-2 border-purple-500 bg-purple-50 text-center text-lg font-medium text-purple-700"
                  >
                    Processing
                  </motion.div>

                  {/* Animated Arrow */}
                  <motion.svg
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute left-0 top-0 h-full w-full overflow-visible"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M 30,40 L 55,55"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-indigo-500"
                      strokeDasharray="0 1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                    <motion.path
                      d="M 58,52 L 55,60 L 50,52"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-indigo-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2.5 }}
                    />
                  </motion.svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Elements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -left-10 top-1/3 w-36 rounded-lg bg-white p-4 shadow-lg"
          >
            <div className="mb-2 space-y-1">
              <div className="h-3 w-24 rounded-full bg-gray-300"></div>
              <div className="h-3 w-16 rounded-full bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-6 w-6 rounded-md bg-gray-200"></div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 right-1/4 w-48 rounded-lg bg-white p-4 shadow-lg"
          >
            <div className="mb-2 space-y-1">
              <div className="h-3 w-32 rounded-full bg-gray-300"></div>
              <div className="h-3 w-24 rounded-full bg-gray-300"></div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="col-span-1 h-8 rounded-md bg-indigo-100"></div>
              <div className="col-span-1 h-8 rounded-md bg-purple-100"></div>
              <div className="col-span-1 h-8 rounded-md bg-pink-100"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
