const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      date: "2024-03-15",
      excerpt: "Best practices and patterns for creating maintainable React apps that scale with your team and codebase.",
      tags: ["React", "Architecture", "Best Practices"],
    },
    {
      title: "Understanding TypeScript Generics",
      date: "2024-03-01",
      excerpt: "A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
      tags: ["TypeScript", "Programming", "Tutorial"],
    },
    {
      title: "My Journey into Full-Stack Development",
      date: "2024-02-20",
      excerpt: "Reflections on learning full-stack development and the challenges I faced along the way.",
      tags: ["Career", "Learning", "Personal"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-accent">$</span> blog
        </h1>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="border-b border-border pb-8 last:border-b-0 hover:border-accent transition-colors duration-300 cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-semibold hover-accent">{post.title}</h2>
                  <span className="text-muted-foreground text-sm">{post.date}</span>
                </div>
                
                <p className="text-muted-foreground">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary border border-border text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <p className="text-sm">yap</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
