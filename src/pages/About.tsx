const About = () => {
  const skills = {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI"],
    tools: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"],
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-accent">$</span> about_me
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-accent">{">"} intro</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              yap yap yap yap yap yap yapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyapyap
               yap yapyapyap.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-accent">{">"} education</h2>
            <div className="border-l-2 border-accent pl-4 space-y-4">
              <div>
                <h3 className="font-semibold">yap yap yap yap yap yap yap yap yap yap yap yap .</h3>
                <p className="text-muted-foreground text-sm">yap yap yap yap yap yap yap yap yap yap yap yap .</p>
                <p className="text-muted-foreground text-sm mt-1">yap yap yap yap yap .</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-accent">{">"} skills</h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm text-accent uppercase tracking-wider mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary border border-border text-sm rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-accent">{">"} experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold">yap yap yap yap yap yap</h3>
                <p className="text-muted-foreground text-sm mb-2"> </p>
                <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                  <li>yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap </li>
                  <li>yap yap yap yap yap yap </li>
                  <li>yap yap yap yap yap yap </li>
                </ul>
              </div>
              
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold">Full-Stack yapper</h3>
                <p className="text-muted-foreground text-sm mb-2">some info</p>
                <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                  <li>yap yap yap yap yap yap </li>
                  <li>yap yap yap yap yap yap </li>
                  <li>yap yap yap yap yap yap </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
