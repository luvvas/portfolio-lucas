import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-[full]">
        <Image
          width={420}
          height={289}
          src="/images/card-bg.png"
          alt="Thumbnail do project em C#"
          className="opacity-20 w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-[200px] object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Nome do Projeto
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          reiciendis rem facilis alias provident quae laborum magnam inventore
          molestias, eveniet vel, voluptatibus fugit corporis corrupti tempora
          optio quo in? Impedit possimus veritatis blanditiis ad veniam
          consectetur, fuga eveniet repellat quidem!
        </p>

        <div className="flex gap-x-2 flex-wrap-mb-8 lg:max-w-[350px]">
          <TechBadge name="C#" />
          <TechBadge name="C#" />
          <TechBadge name="C#" />
          <TechBadge name="C#" />
          <TechBadge name="C#" />
        </div>

        <Link href="/project/leadsoft" className="pt-6">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
