import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const posts = blogPosts;

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Insights & Tips for Better Bookkeeping</h1>
          <p className="text-xl text-gray-600">
            Stay updated with practical tips and insights to help you manage your business finances more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center font-bold text-navy group-hover:text-gold transition-colors">
                  Read More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter simple signup */}
      <section className="bg-navy text-white mt-20">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get the latest bookkeeping tips and financial insights delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button type="submit" className="btn-accent">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
