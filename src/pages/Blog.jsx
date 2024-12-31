import React from 'react';
import { motion } from 'framer-motion';
import { useApi } from '../hooks/useApi';
import { blogService } from '../services/blogService';
import PageHeader from '../components/PageHeader';
import BackgroundSparkles from '../components/BackgroundSparkles';
import { FaCalendar, FaUser, FaTags } from 'react-icons/fa';
import '../styles/Blog.css';

function Blog() {
  const { data: posts, loading, error } = useApi(() => 
    blogService.getPosts({ 
      populate: '*',
      sort: 'publishedAt:desc' 
    })
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog posts</div>;

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Blog" 
        subtitle="Insights from our magical realm"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="blog-grid">
            {posts?.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {post.attributes.cover && (
                  <div className="blog-image">
                    <img 
                      src={getImageUrl(post.attributes.cover.data.attributes.url)} 
                      alt={post.attributes.title} 
                    />
                  </div>
                )}
                <div className="blog-content">
                  <h3>{post.attributes.title}</h3>
                  <div className="blog-meta">
                    <span>
                      <FaCalendar /> 
                      {new Date(post.attributes.publishedAt).toLocaleDateString()}
                    </span>
                    <span>
                      <FaUser /> 
                      {post.attributes.author?.data?.attributes?.name || 'Anonymous'}
                    </span>
                  </div>
                  <p>{post.attributes.excerpt}</p>
                  {post.attributes.tags && (
                    <div className="tags">
                      {post.attributes.tags.split(',').map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">
                          <FaTags /> {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  <motion.button 
                    className="btn btn-primary read-more"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
