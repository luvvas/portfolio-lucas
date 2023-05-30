import Image from 'next/image'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { TechBadge } from '@/app/components/tech-badge'
import { RichText } from '@/app/components/rich-text'

import { WorkExperience as IWorkExperience } from '@/app/types/work-experience'

type ExperienceItemProps = {
  experience: IWorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  // Da de fazer assim
  // const { companyLogo, companyName, companyUrl } = experience

  const startDate = new Date(experience.startDate)
  const formattedStardDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = experience.endDate ? format(new Date(experience.endDate), 'MMM yyyy', { locale: ptBR }) : 'o momento'

  const end = experience.endDate ? new Date(experience.endDate) : new Date()
  const months = differenceInMonths(end, startDate) 
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`


  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={experience.companyLogo.url}
            width={40}
            height={40}
            className="opacity-60 rounded-full"
            alt={`Logo da empresa ${experience.companyName}`}
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            {experience.companyName}
          </a>
          <h4 className="text-gray-400">{experience.role}</h4>
          <span className="text-gray-500">
            {formattedStardDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <RichText content={experience.description.raw}/>
          </div>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            {experience.technologies.map((tech) => (
              <TechBadge key={`experience-${experience.companyName}-tech-${tech.name}`} name={tech.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
