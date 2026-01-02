import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-16 text-gray-900">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1692772819238-7c3fd60917cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NzM1MTEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cybersecurity Workspace"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm currently in my final semester pursuing a Bachelor's degree in Computer Science, 
              specializing in cybersecurity. With a CGPA of 3.40/4.00 and expected graduation in 
              December 2026, I'm passionate about digital safety and threat mitigation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise includes vulnerability assessment, penetration testing, and implementing 
              security best practices. I'm actively seeking opportunities in security analyst and 
              incident response roles, as well as IT support positions where I can apply my knowledge 
              in network security, risk management, and security operations to help organizations 
              protect their digital assets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I have hands-on experience with security tools like Wireshark, Nmap, and pfSense, 
              combined with strong analytical and problem-solving skills. I'm committed to continuous 
              learning and staying current with evolving cybersecurity threats and solutions.
            </p>
            <div className="pt-4">
              <h3 className="text-xl mb-3 text-gray-900">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Team Collaboration', 'Critical Thinking', 'Problem Solving', 'Communication', 'Creativity', 'Adaptability'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}