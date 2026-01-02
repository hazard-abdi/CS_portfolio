import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Zero Trust Network Architecture',
    type: 'Final Year Project',
    description:
      'Designed and implemented a Zero Trust Network Architecture (ZTNA) lab using pfSense with segmented security zones (USER, DMZ, APP, SOC) and strict least-privilege access control.',
    image: 'https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2NzM0OTU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['pfSense', 'ZTNA', 'IDS/IPS', 'Network Security'],
    details: [
      'Integrated identity- and policy-based access decisions through custom Policy Decision Point (PDP)',
      'Implemented network monitoring and threat detection using IDS/IPS concepts',
      'Demonstrated secure, scalable enterprise-style architecture'
    ]
  },
  {
    id: 2,
    title: 'IoT Environmental Monitoring Robot',
    type: 'Simulation Project',
    description:
      'Engineered mobile-controlled IoT robot for real-time environmental condition monitoring with sensor integration and wireless communication protocols.',
    image: 'https://images.unsplash.com/photo-1643917367924-36592d2be3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjByb2JvdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3MzQ5NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['IoT', 'Embedded Systems', 'Wireless Communication', 'Sensors'],
    details: [
      'Implemented sensor integration for data collection across multiple parameters',
      'Developed remote access capabilities using wireless protocols',
      'Applied embedded systems knowledge to create practical IoT solution'
    ]
  },
  {
    id: 3,
    title: 'Assistive Application for the Impaired',
    type: 'Accessibility Prototype',
    description:
      'Created mobile application prototype designed to assist users with impairments in daily interactions, emphasizing usability and accessibility design principles.',
    image: 'https://images.unsplash.com/photo-1765623821768-179fde277d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwYXNzaXN0aXZlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjczNDk1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Mobile Development', 'Accessibility', 'UX Design', 'User Research'],
    details: [
      'Conducted user-centered design research for practical applicability',
      'Emphasized usability and accessibility throughout development',
      'Demonstrated commitment to inclusive technology development'
    ]
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900">
            Academic Projects
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Hands-on projects demonstrating expertise in cybersecurity, IoT systems, and inclusive technology development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}