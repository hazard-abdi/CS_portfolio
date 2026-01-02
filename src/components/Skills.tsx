import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Shield, Network, Code, Award } from 'lucide-react';

const skillCategories = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    skills: ['Security Auditing & Risk Analysis', 'Vulnerability Assessment', 'Penetration Testing (Wireshark, Nmap)', 'System Hardening', 'IT Security Best Practices'],
  },
  {
    icon: Network,
    title: 'Networking & Infrastructure',
    skills: ['Networking Fundamentals', 'pfSense', 'IDS/IPS Implementation', 'Zero Trust Architecture', 'Linux Environments'],
  },
  {
    icon: Code,
    title: 'Development',
    skills: ['Web Development (HTML, CSS, JavaScript)', 'Mobile App Development', 'IoT Systems', 'Embedded Systems', 'Wireless Protocols'],
  },
  {
    icon: Award,
    title: 'Certifications & Achievements',
    skills: ['Dean\'s List (3 Semesters)', 'Diploma in Web Development', 'CGPA: 3.40/4.00', 'Expected Graduation: Dec 2026'],
  },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A comprehensive skill set focused on cybersecurity, network infrastructure, and secure software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl mb-4 text-gray-900">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 flex items-start gap-2"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
            <h3 className="text-2xl mb-4 text-gray-900">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-900">Bachelor of Computer Science</p>
                <p className="text-gray-600">Expected: December 2026</p>
                <p className="text-gray-600">Current CGPA: 3.40/4.00</p>
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-700 mb-2">Relevant Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {['Operating Systems', 'Data Structures', 'Networking', 'Information Security', 'Vulnerability & Penetration Testing', 'Risk Management'].map((course) => (
                    <span key={course} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
            <h3 className="text-2xl mb-4 text-gray-900">Experience</h3>
            <div>
              <p className="text-gray-900">Cybersecurity Outreach Program</p>
              <p className="text-gray-600 mb-3">Tapah, Malaysia</p>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Educated highway users on financial scam risks and safe online practices</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Communicated complex cybersecurity concepts to diverse audiences</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2 text-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Raised awareness on digital safety protocols through interactive demonstrations</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}