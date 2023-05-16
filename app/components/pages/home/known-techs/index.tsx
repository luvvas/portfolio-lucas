import { TbBrandNextjs } from 'react-icons/tb'

import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <KnownTech
            tech={{
              name: 'Next.js',
              icon: <TbBrandNextjs />,
              startDate: '2023-01-01',
            }}
          />
        ))}
      </div>
    </section>
  )
}
