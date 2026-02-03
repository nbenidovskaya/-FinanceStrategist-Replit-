import { motion } from "framer-motion";
import { Layers, Target, LineChart } from "lucide-react";

export function Methodology() {
  return (
    <section id="method" className="section-padding bg-slate-50">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
              My Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Finance isn't just about spreadsheets; it's the language of business strategy. 
              My approach bridges the gap between complex data and clear decision-making.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Complexity Simplified</h3>
                  <p className="text-muted-foreground">
                    We talk about difficult things in plain language, respecting your intellect without hiding behind jargon.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tangible Results</h3>
                  <p className="text-muted-foreground">
                    Every engagement is designed for a measurable outcome. No steps in vain. We focus on ROI and value creation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <LineChart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Data-Driven Strategy</h3>
                  <p className="text-muted-foreground">
                    Decisions based on facts, not feelings. We build systems that provide clarity and foresight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Minimalist abstract finance/architecture */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Architecture of Finance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <p className="font-serif text-2xl font-bold text-primary mb-2">15+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Years of Executive Financial Leadership</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
