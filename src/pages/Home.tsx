import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  CheckCircle2, 
  Settings, 
  RefreshCw, 
  PieChart, 
  CreditCard, 
  BarChart3,
  ArrowRight,
  Star
} from 'lucide-react';

export default function Home() {
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  const services = [
    {
      title: 'QuickBooks Setup',
      desc: 'Set up your books the right way from the start for accurate tracking and reporting.',
      icon: <Settings className="text-gold" size={32} />
    },
    {
      title: 'Cleanup & Catch-Up',
      desc: 'Behind on your books? I’ll bring everything up to date quickly and accurately.',
      icon: <RefreshCw className="text-gold" size={32} />
    },
    {
      title: 'Monthly Categorization',
      desc: 'Stay organized with properly categorized transactions every month.',
      icon: <PieChart className="text-gold" size={32} />
    },
    {
      title: 'Bank Reconciliation',
      desc: 'Ensure every dollar is accounted for with precise reconciliation.',
      icon: <CreditCard className="text-gold" size={32} />
    },
    {
      title: 'Financial Reports',
      desc: 'Clear, easy-to-understand reports to help you make informed decisions.',
      icon: <BarChart3 className="text-gold" size={32} />
    },
    {
      title: 'Quarterly Meetings',
      desc: 'Review the books, answer your questions, confirm expectations, and plan changes for the next quarter.',
      icon: <CheckCircle2 className="text-gold" size={32} />
    }

  ];

  const whyChooseUs = [
    '12+ Years of Professional Experience',
    'Detail-Oriented & Accurate',
    'Reliable & Consistent Support',
    'Personalized Service for Your Business',
    'Clear Financial Insights You Can Use'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({x: e.clientX - rect.left, y: e.clientY - rect.top});
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute w-48 h-48 rounded-full blur-2xl opacity-60"
            style={{
              left: mousePos.x - 96,
              top: mousePos.y - 96 + 50,
              background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)'
            }}
          />
        </div>
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight mb-6">
              Need a Reliable Bookkeeper You Can Trust?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Helping small businesses save time, stay organized, and make smarter financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent text-center">
                Book Your Free Consultation
              </Link>
              <Link to="/contact" className="btn-primary text-center">
                Get Started Today
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Outer Frame - holds the shadow, border, and background color */}
<div className="aspect-square bg-white p-2 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative z-10 transition-transform duration-300 hover:scale-105">
  
  {/* Inner Container - holds the image and clips it to the rounded corners */}
  <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-100/30">
    <img 
      src="/images/Hero Book-keeping.webp" 
      alt="Professional Bookkeeping" 
      className="w-full h-full object-cover object-right"
      referrerPolicy="no-referrer"
    />
  </div>
</div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold rounded-full z-0 opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-navy rounded-full z-0 opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Simple, Accurate Bookkeeping — So You Can Focus on Growth
            </h2>
            <p className="text-lg text-gray-600">
              I help small businesses stay financially organized with reliable, detail-oriented bookkeeping services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card group"
              >
                <div className="mb-6 p-4 bg-slate-50 rounded-lg inline-block group-hover:bg-gold/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/Nalini.webp" 
                alt="Nalini Pratap" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Meet Nalini</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                With over 12 years of professional experience, Nalini Pratap helps small businesses take control of their finances with clarity and confidence.
              </p>
              <p>
                Specializing in QuickBooks, transaction categorization, and bank reconciliation, she provides accurate, reliable bookkeeping that business owners can depend on.
              </p>
              <p>
                Her approach is simple — create efficient systems, eliminate financial confusion, and give you the insights you need to grow your business.
              </p>
              <p className="font-medium text-navy">
                Nalini is passionate about helping businesses save time, stay organized, and focus on what truly matters: growth.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center text-gold font-bold hover:text-gold-hover transition-colors">
                Learn more about our approach <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy text-white">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Work With Nalini?</h2>
            <div className="space-y-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="mt-1 bg-gold rounded-full p-1">
                    <CheckCircle2 size={18} className="text-navy" />
                  </div>
                  <span className="text-lg md:text-xl text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-gold">What Clients Say</h3>
            <div className="space-y-8">
              <div className="relative">
                <Star className="text-gold absolute -top-4 -left-4 opacity-20" size={40} />
                <p className="italic text-lg text-gray-300 mb-4">
                  “Working with Nalini has completely transformed how we manage our finances. Everything is now organized and stress-free.”
                </p>
                <p className="font-bold">— Small Business Owner</p>
              </div>
              <div className="relative">
                <Star className="text-gold absolute -top-4 -left-4 opacity-20" size={40} />
                <p className="italic text-lg text-gray-300 mb-4">
                  “Reliable, accurate, and easy to work with. Highly recommended for any small business owner.”
                </p>
                <p className="font-bold">— Local Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white">
        <div className="section-padding text-center">
          <div className="bg-slate-50 p-12 md:p-20 rounded-3xl border border-gray-100">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Stop stressing over your books — get expert help and focus on growing your business.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-10 py-4 inline-block">
              Book Your Free Consultation Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
