import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      {/* Background particles/blobs */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 opacity-30 blur-3xl"
            initial={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto grid min-h-screen items-center px-4 py-32 md:grid-cols-2 md:gap-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl"
          >
            Create and collaborate with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              DrawApp
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600"
          >
            A whiteboard tool that lets you easily sketch diagrams that have a
            hand-drawn feel to them.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl"
            >
              Try DrawApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-500"
            >
              View Examples
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 md:mt-0"
        >
          <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-2xl md:h-[480px]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100"></div>
            <div className="absolute inset-0 rounded-xl border border-white/20 backdrop-blur-sm"></div>
            <div className="absolute left-0 top-0 h-full w-full rounded-xl p-4">
              {/* Placeholder for drawing canvas preview */}
              <div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-center text-gray-500">
                  Drawing Canvas Preview
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-600/20 to-pink-600/20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};
