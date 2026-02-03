import { Link } from "react-scroll";
import { Linkedin, Mail, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-serif font-bold text-white mb-4 block">
              Finance<span className="text-secondary">Strategist</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed mb-6">
              Transforming finance from a back-office function into a strategic growth engine. 
              Independent advisory for forward-thinking leaders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="mailto:contact@finance-strategist.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="services" smooth={true} className="hover:text-secondary cursor-pointer">Strategic Consulting</Link></li>
              <li><Link to="services" smooth={true} className="hover:text-secondary cursor-pointer">CFO Mentoring</Link></li>
              <li><Link to="services" smooth={true} className="hover:text-secondary cursor-pointer">Independent Advisory</Link></li>
              <li><Link to="services" smooth={true} className="hover:text-secondary cursor-pointer">Crisis Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="about" smooth={true} className="hover:text-secondary cursor-pointer">About Me</Link></li>
              <li><Link to="method" smooth={true} className="hover:text-secondary cursor-pointer">Methodology</Link></li>
              <li><Link to="contact" smooth={true} className="hover:text-secondary cursor-pointer">Contact</Link></li>
              <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Finance Strategist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
