import React from 'react';

const AboutProjectsSummary = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#00ffff]"> project.operations --log</h2>
        <p className="text-lg text-[#00eaff]">Breaking down my code contributions and tech wizardry.</p>
      </header>

      {/* Project Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-[#031a2b] rounded-lg shadow-md">
          <h3 className="text-2xl text-[#00ffff]">Projects Completed</h3>
          <p className="text-[#00f0ff] text-xl font-semibold">25+</p>
          <p className="text-[#00f0ff]">Full-stack web applications, APIs, dashboards, and more.</p>
        </div>
        <div className="p-6 bg-[#031a2b] rounded-lg shadow-md">
          <h3 className="text-2xl text-[#00ffff]">Primary Tech Stack</h3>
          <p className="text-[#00f0ff] text-xl font-semibold">Next.js, TypeScript, PostgreSQL</p>
          <p className="text-[#00f0ff]">The core stack powering my projects.</p>
        </div>
        <div className="p-6 bg-[#031a2b] rounded-lg shadow-md">
          <h3 className="text-2xl text-[#00ffff]">Most Active Period</h3>
          <p className="text-[#00f0ff] text-xl font-semibold">2024–2025</p>
          <p className="text-[#00f0ff]">My primary development phase. Projects launched.</p>
        </div>
      </div>

      {/* Tech Stack Breakdown Section */}
      <div className="p-6 bg-[#031a2b] rounded-lg shadow-md mt-8">
        <h3 className="text-2xl text-[#00ffff]">Tech Stack Breakdown</h3>
        <div className="space-y-4 mt-4">
          <div className="flex justify-between">
            <span className="text-[#00f0ff]">Next.js</span>
            <span className="text-[#00eaff]">50%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#00f0ff]">TypeScript</span>
            <span className="text-[#00eaff]">40%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#00f0ff]">PostgreSQL</span>
            <span className="text-[#00eaff]">30%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#00f0ff]">Prisma</span>
            <span className="text-[#00eaff]">20%</span>
          </div>
          {/* Add more tech stacks here if needed */}
        </div>
      </div>
    </section>
  );
};

export default AboutProjectsSummary;
