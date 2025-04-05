import { motion } from "framer-motion";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Examples", href: "#examples" },
        { name: "Pricing", href: "#pricing" },
        { name: "Updates", href: "#updates" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Tutorials", href: "#tutorials" },
        { name: "API", href: "#api" },
        { name: "Community", href: "#community" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
        { name: "Security", href: "#security" },
      ],
    },
  ];

  return (
    <footer className="relative bg-white py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <motion.a
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative mr-2 h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-white"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  D
                </motion.div>
              </div>
              <span className="text-xl font-bold text-gray-900">DrawApp</span>
            </motion.a>
            <p className="mt-4 text-sm text-gray-600">
              Create beautiful hand-drawn style diagrams, charts, and
              illustrations.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Social media icons */}
              {["twitter", "facebook", "instagram", "github"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-indigo-100 hover:text-indigo-600"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-4 w-4 rounded-full bg-current"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Subscribe to our newsletter
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Get the latest news and updates
            </p>
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DrawApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
