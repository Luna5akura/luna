import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Switch } from "@/components/ui/switch";
import { useFontToggle } from "@/context/FontToggleContext";

// Create animated Link component
const MotionRouterLink = motion(RouterLink);

const Navbar: React.FC = () => {
  const { fontToggle, setFontToggle } = useFontToggle();
  const controls = useAnimation();

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  // Link variants with more dynamic animation
  const linkVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.8 },
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10,
        duration: 0.5 
      } 
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  // Background variants for hover effect
  const bgVariants = {
    rest: { width: 0 },
    hover: { 
      width: "100%",
      transition: { 
        type: "spring", 
        bounce: 0.25,
        stiffness: 130,
        damping: 9,
        duration: 0.3 
      }
    }
  };

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('alt-font', fontToggle);
    
    // Play animation when component mounts
    controls.start("visible");
  }, [fontToggle, controls]);

  return (
    <nav className="bg-sky-100 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RouterLink 
            to="/" 
            className="text-xl font-bold text-sky-900 hover:text-sky-600 relative"
          >
            <span className="relative z-10">Luna</span>
            <motion.span
              className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-blue-900 to-purple-600 -z-10 rounded-md"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ type: "spring", bounce: 0.25, stiffness: 130, damping: 9 }}
            />
          </RouterLink>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex items-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Switch
              checked={fontToggle}
              onCheckedChange={setFontToggle}
            />
          </motion.div>

          {['Warp', 'World', 'About'].map((item) => (
            <MotionRouterLink 
              key={item}
              to={`/${item.toLowerCase()}`}
              variants={linkVariants}
              className="font-semibold text-sky-900 hover:text-sky-600 px-2 py-1 relative overflow-hidden"
              whileHover="hover"
            >
              <span className="relative z-10">{item}</span>
              <motion.span
                className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-blue-900/20 to-purple-600/20 -z-10 rounded-md"
                variants={bgVariants}
                initial="rest"
                whileHover="hover"
              />
            </MotionRouterLink>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;