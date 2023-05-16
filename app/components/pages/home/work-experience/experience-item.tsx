import Image from 'next/image'

import { TechBadge } from '@/app/components/tech-badge'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/rounded.png"
            width={40}
            height={40}
            className="opacity-20 rounded-full"
            alt="Logo da empresa"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ Leadsoft
          </a>
          <h4 className="text-gray-400">Desenvolvedor C# ASP.NET</h4>
          <span className="text-gray-500">
            out 2022 • No momento • (6 meses)
          </span>
          <p className="text-gray-400">
            Desenvolvimento e manutenção de serviços utilizando C#, ASP.NET,
            PostgreSQL e Entity Framework Core, utilizando o Jira para
            planejamento dos sprints
          </p>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name="C#" />
            <TechBadge name="C#" />
            <TechBadge name="C#" />
            <TechBadge name="C#" />
            <TechBadge name="C#" />
          </div>
        </div>
      </div>
    </div>
  )
}
