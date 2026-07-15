import { EXPERIENCES_ID, EXPERIENCES_EN, VENTURES_ID, VENTURES_EN, SKILLS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function CVPreview() {
  const { language, t } = useLanguage();
  const EXPERIENCES = language === 'ID' ? EXPERIENCES_ID : EXPERIENCES_EN;
  const VENTURES = language === 'ID' ? VENTURES_ID : VENTURES_EN;

  const sortedExperiences = [...EXPERIENCES].sort((a, b) => {
    const aYear = parseInt(a.period.split(' - ')[0]);
    const bYear = parseInt(b.period.split(' - ')[0]);
    return bYear - aYear;
  });

  const skillsByCategory = SKILLS.reduce<Record<string, typeof SKILLS>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryLabels: Record<string, string> = {
    AI_ML: language === 'ID' ? 'AI & Machine Learning' : 'AI & Machine Learning',
    Fintech: language === 'ID' ? 'Fintech & Market Analysis' : 'Fintech & Market Analysis',
    Consulting: language === 'ID' ? 'Kepemimpinan & Konsultasi' : 'Leadership & Consulting',
    Architecture: language === 'ID' ? 'Arsitektur Sistem' : 'System Architecture',
    E_Learning: language === 'ID' ? 'E-Learning' : 'E-Learning',
  };

  return (
    <div id="cv-print-content" className="cv-page">
      {/* Cover / Header Section */}
      <div className="cv-header">
        <div className="cv-header-bg" />
        <div className="cv-header-content">
          <h1 className="cv-name">Iwan Cahyo Suryadi</h1>
          <p className="cv-title">
            {t(
              'Tech Entrepreneur & AI Pioneer | CEO VOXIA, Founder INVEZTHINK & MaxxSales',
              'Tech Entrepreneur & AI Pioneer | CEO VOXIA, Founder INVEZTHINK & MaxxSales'
            )}
          </p>
          <div className="cv-contact">
            <span>ics@voxia.id</span>
            <span className="cv-contact-sep">•</span>
            <span>linkedin.com/in/iwancahyo</span>
            <span className="cv-contact-sep">•</span>
            <span>{t('Jakarta, Indonesia', 'Jakarta, Indonesia')}</span>
          </div>
        </div>
      </div>

      <div className="cv-body">
        {/* Professional Summary */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {t('Ringkasan Profesional', 'Professional Summary')}
          </h2>
          <p className="cv-text">
            {t(
              'Inovator teknologi dan pelopor AI Indonesia dengan pengalaman 10+ tahun dalam transformasi digital, pengembangan solusi AI enterprise, dan kepemimpinan teknologi. Mendirikan dan memimpin VOXIA (Solusi AI Terpadu), INVEZTHINK (Platform Edukasi Analitik Finansial), dan MaxxSales (AI-Powered Sales Growth OS) — tiga venture yang mendorong adopsi kecerdasan buatan di Indonesia.',
              'Indonesian technology innovator and AI pioneer with 10+ years of experience in digital transformation, enterprise AI solution development, and technology leadership. Founded and leads VOXIA (Integrated AI Solutions), INVEZTHINK (Financial Analytics Education Platform), and MaxxSales (AI-Powered Sales Growth OS) — three ventures driving AI adoption in Indonesia.'
            )}
          </p>
        </section>

        {/* Core Competencies / Skills */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {t('Kompetensi Inti', 'Core Competencies')}
          </h2>
          <div className="cv-skills-grid">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="cv-skills-category">
                <h3 className="cv-skills-category-title">{categoryLabels[category] || category}</h3>
                <ul className="cv-skills-list">
                  {skills.map((skill) => (
                    <li key={skill.name} className="cv-skill-item">
                      <span className="cv-skill-name">{skill.name}</span>
                      <div className="cv-skill-bar">
                        <div
                          className="cv-skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Ventures / Companies */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {t('Ventures & Perusahaan', 'Ventures & Companies')}
          </h2>
          <div className="cv-ventures">
            {VENTURES.map((venture, idx) => (
              <div key={idx} className="cv-venture-item">
                <div className="cv-venture-header">
                  <h3 className="cv-venture-name">{venture.name}</h3>
                  <span className="cv-venture-role">{venture.role}</span>
                </div>
                <p className="cv-text cv-venture-desc">{venture.description}</p>
                <div className="cv-venture-features">
                  {venture.features.slice(0, 3).map((f, i) => (
                    <span key={i} className="cv-venture-feature">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {t('Pengalaman Kerja', 'Work Experience')}
          </h2>
          <div className="cv-experiences">
            {sortedExperiences.map((exp) => (
              <div key={exp.id} className="cv-experience-item">
                <div className="cv-experience-header">
                  <div>
                    <h3 className="cv-experience-role">{exp.role}</h3>
                    <p className="cv-experience-company">{exp.company}</p>
                  </div>
                  <div className="cv-experience-meta">
                    <span className="cv-experience-period">{exp.period}</span>
                    <span className="cv-experience-location">{exp.location}</span>
                  </div>
                </div>
                <p className="cv-text">{exp.description}</p>
                <ul className="cv-bullets">
                  {exp.bullets.slice(0, 3).map((bullet, i) => (
                    <li key={i} className="cv-bullet">{bullet}</li>
                  ))}
                </ul>
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="cv-tech-stack">
                    {exp.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="cv-tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="cv-footer">
        <p>
          {t(
            'Portofolio interaktif: ics.qzz.io | Email: ics@voxia.id | LinkedIn: linkedin.com/in/iwancahyo',
            'Interactive portfolio: ics.qzz.io | Email: ics@voxia.id | LinkedIn: linkedin.com/in/iwancahyo'
          )}
        </p>
        <p className="cv-footer-small">
          {t('Dibuat dengan React + TypeScript + Tailwind CSS. Seluruh data diperbaharui secara otomatis.', 
            'Built with React + TypeScript + Tailwind CSS. All data is automatically updated.')}
        </p>
      </div>
    </div>
  );
}
