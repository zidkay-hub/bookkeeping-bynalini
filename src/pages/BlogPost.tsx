import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const postId = Number(id);
  const post = blogPosts.find((item) => item.id === postId);

  if (!post) {
    return (
      <div className="pt-32 pb-20 section-padding">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p className="mb-6 text-gray-600">We couldn’t find that blog article. Please return to the blog list.</p>
          <Link to="/blog" className="inline-flex items-center font-bold text-navy hover:text-gold">
            <ArrowLeft size={18} className="mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-2xl shadow-sm" referrerPolicy="no-referrer" />
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
          <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
          <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">{post.title}</h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">{post.content}</div>

        <div className="mt-10">
          <Link to="/blog" className="inline-flex items-center font-bold text-navy hover:text-gold">
            <ArrowLeft size={18} className="mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
