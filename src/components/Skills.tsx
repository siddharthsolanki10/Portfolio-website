import React from 'react';

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Node.js', 'NestJS', 'Express', 'Next.js'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Tools',
    items: ['Docker', 'AWS', 'Git', 'Tailwind CSS', 'Vite', 'Grafana'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="section" id="skills" aria-label="Skills">
      <p className="section-label">skills</p>

      <div>
        {skillGroups.map((group) => (
          <div className="skill-category" key={group.category}>
            <h3 className="skill-category-name">{group.category}</h3>
            <ul className="skill-list" role="list">
              {group.items.map((item) => (
                <li className="skill-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
