"use client"

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link'

import { Project } from '@/app/types/projects'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  }

  return (
    <motion.div 
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
        <Image
          width={420}
          height={289}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="opacity-20 w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </h3>

        <p className="text-gray-400 my-6">
          {project.shortDescription}
        </p>

        <div className="flex gap-x-2 flex-wrap-mb-8 lg:max-w-[350px]">
          {project.technologies.map(tech => (
            <TechBadge key={`${project.title}-tech-${tech.name}`} name={tech.name} />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="pt-6">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
