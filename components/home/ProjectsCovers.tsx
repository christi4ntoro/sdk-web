'use client'

type ProjectImage = { slug: string; name: string }

// Files go in public/projects/<slug>.jpg
// 21 slots in order: col1 top→bottom, col2 top→bottom, ... col7 top→bottom
// Use null to keep the placeholder color for that slot
const images: (ProjectImage | null)[] = [
  // col 1 — wide
  { slug: 'tgi-gas-transportation', name: 'Gas Transportation' },
  { slug: 'lms-espacio-civico', name: 'Espacio Cívico Panamá' },
  { slug: 'copa-biosecurity', name: 'Biosecurity Course' },
  // col 2 — narrow
  { slug: 'geb-cybersecurity', name: 'GEB Cybersecurity' },
  { slug: 'dk-tools', name: 'DeKi Tools management' },
  { slug: 'copa-system-security', name: 'Copa Security' },
  // col 3 — wide
  { slug: 'finanzasdelclima-dnp', name: 'Finanzas del Clima' },
  { slug: 'copa-bomb', name: 'Bomb Threat Course' },
  { slug: 'copa-tripulantes', name: 'Tripulantes de Cabina' },
  // col 4 — wide (center)
  { slug: 'copa-saba-gerentes', name: 'Manual SABA Generentes' },
  { slug: 'geb-control', name: 'GEB Course' },
  { slug: 'servir-peru', name: 'LMS Servir Perú' },
  // col 5 — narrow
  { slug: 'copa-scaii', name: 'SCAII Course' },
  { slug: 'dk-time-management', name: 'DeKi Time Management' },
  { slug: 'copa-bioseguridad-mobile', name: 'CM Biosecurity' },
  // col 6 — wide
  { slug: 'eprop-lms', name: 'EPROP LMS' },
  { slug: 'tgi-planeacion', name: 'GEB Planeation Course' },
  { slug: 'safety-management-system', name: 'Safety Management System Course' },
  // col 7 — wide
  { slug: 'copa-pci', name: 'PCI Course' },
  { slug: 'copa-leadership', name: 'Leadership Course' },
  { slug: 'fsf-transfusiones', name: 'Trasfusiones' },
]

const colorClasses = [
  'dk-projects-card--1a', 'dk-projects-card--1b', 'dk-projects-card--1c',
  'dk-projects-card--2a', 'dk-projects-card--2b', 'dk-projects-card--2c',
  'dk-projects-card--3a', 'dk-projects-card--3b', 'dk-projects-card--3c',
  'dk-projects-card--4a', 'dk-projects-card--4b', 'dk-projects-card--4c',
  'dk-projects-card--5a', 'dk-projects-card--5b', 'dk-projects-card--5c',
  'dk-projects-card--6a', 'dk-projects-card--6b', 'dk-projects-card--6c',
  'dk-projects-card--7a', 'dk-projects-card--7b', 'dk-projects-card--7c',
]

function Card({ item, colorClass }: { item: ProjectImage | null; colorClass: string }) {
  return (
    <div className={`dk-projects-card ${colorClass}`}>
      {item && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/projects/${item.slug}.jpg`}
          alt={item.name}
          className="dk-projects-card-img"
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}

const cols = [
  { width: 'wide',   start: 0  },
  { width: 'narrow', start: 3  },
  { width: 'wide',   start: 6  },
  { width: 'wide',   start: 9  },
  { width: 'narrow', start: 12 },
  { width: 'wide',   start: 15 },
  { width: 'wide',   start: 18 },
]

export function ProjectsCovers() {
  return (
    <section className="dk-projects-section">
      <div className="dk-projects-track">
        {cols.map((col, ci) => (
          <div key={ci} className={`dk-projects-col dk-projects-col--${col.width}`}>
            {[0, 1, 2].map((row) => {
              const i = col.start + row
              return <Card key={i} item={images[i]} colorClass={colorClasses[i]} />
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
