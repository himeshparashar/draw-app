import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Real-time Collaboration",
    description:
      "Work together with your team in real-time, no matter where they are.",
    icon: "/globe.svg",
  },
  {
    title: "Infinite Canvas",
    description: "Never run out of space with our infinite canvas technology.",
    icon: "/window.svg",
  },
  {
    title: "Export & Share",
    description:
      "Export your drawings to multiple formats or share them with a simple link.",
    icon: "/file.svg",
  },
  {
    title: "Custom Libraries",
    description:
      "Create and use your own custom shape libraries to speed up your workflow.",
    icon: "/next.svg",
  },
];

export const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_40%_60%,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_60%_30%,rgba(168,85,247,0.05),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Powerful Features for Your Creative Workflow
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything you need to bring your ideas to life with the simplicity
            and charm of hand-drawn sketches.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>

              <h3 className="relative mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="relative text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
