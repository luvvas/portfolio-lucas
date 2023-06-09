import { getRelativeTimeString } from '@/app/lib/get-relative-time';
import { CMSIcon } from '@/app/components/cms-icon';

import { KnownTech as IKownTechs } from '@/app/types/projects'

type KnownTechProps = {
  tech: IKownTechs
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate), 'pt-BR'
  ).replace('há ', '');

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg}/>
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  )
}