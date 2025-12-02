import { motion } from "framer-motion";

export default function Backgroundanimation() {
  const particles = Array.from({ length: 200 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden ">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gray-500"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.3,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.4],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}
