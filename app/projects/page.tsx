'use client';

const projects = [
  {
    title: 'Transformer From Scratch',
    description:
      'A custom implementation of a transformer model built from the ground up, covering tokenization, attention, positional encoding, and training flow.',
    link: 'https://github.com/zkhan122/transformer-from-scratch',
    status: 'In Progress',
  },
  {
    title: 'EverAround',
    description:
      'EverAround is an AI-powered assistive app designed to help visually impaired users better understand their surroundings in real time. It combines depth estimation, object detection, semantic segmentation, and natural scene understanding into a streamlined system optimized for low-latency performance. Users can ask questions in real time and receive immediate responses about nearby objects, layout, and context, making navigation and situational awareness more accessible and intuitive.',
    link: 'TO BE RELEASED',
    status: 'In Progress',
    collaborators: 'Collaborators: Aliyan Sheikh and Ammad Raja',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <div className="projectsPage">
        <header className="projectsHeader">
          <p className="eyebrow">Projects</p>
          <h1>Research & builds</h1>
        </header>

        <div className="projectsList">
          {projects.map((project) => (
            <article key={project.title} className="projectCard">
              <div className="projectMeta">
                <span className="projectStatus">{project.status}</span>
                <h2>{project.title}</h2>
              </div>

              <p>{project.description}</p>

              {project.collaborators ? (
                <p className="projectCollaborators">{project.collaborators}</p>
              ) : null}

              {project.link === 'TO BE RELEASED' ? (
                <span className="projectLink projectLinkDisabled">To be released</span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  View on GitHub →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
