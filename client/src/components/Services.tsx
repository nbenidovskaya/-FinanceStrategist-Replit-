import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Consulting",
    subtitle: "Project-Based Expertise",
    description: "Deep-dive interventions to solve critical financial challenges.",
    items: [
      "Due Diligence & Audit",
      "Financial Function Optimization",
      "M&A Strategy & Execution",
      "Crisis Management"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" // office analysis
  },
  {
    title: "Mentoring",
    subtitle: "Individual & Group",
    description: "Empowering leaders with financial literacy and career guidance.",
    items: [
      "\"Path to CFO\" Coaching",
      "Financial Literacy for CEOs",
      "Career Transition Programs",
      "Team Skill Development"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" // mentorship meeting
  },
  {
    title: "Retainer",
    subtitle: "Independent Advisory",
    description: "Ongoing strategic partnership for sustained growth.",
    items: [
      "Monthly Strategic Reviews",
      "Board Meeting Participation",
      "Regular Health Audits",
      "On-Demand Advisory"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" // handshake strategy
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-3xl rounded-full -translate-y-1/2"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Services & Solutions</h2>
          <p className="text-slate-400 text-lg">
            Structured engagement models designed for tangible results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-secondary/50 transition-colors group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                <p className="text-secondary font-medium text-sm mb-4">{service.subtitle}</p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
