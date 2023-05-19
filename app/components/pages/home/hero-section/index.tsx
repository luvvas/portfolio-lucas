'use client'

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

import { Button } from '@/app/components/button/'
import { TechBadge } from '@/app/components/tech-badge'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com.br',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://linkedin.com.br',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://whatsapp.com.br',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lb:pb-[110px]">
      <div className="container flex justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Lucas Machado</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Lucas Machado e 23 anos e atualmente curso Análise e
            Desenvolvimento de Sistemas pela UFPR. Sou um desenvolvedor
            full-stack, e meu objetivo nesse projeto é estudar next.js e
            tailwaind enquanto crio um portifolio para o meu currículo.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="Next.js"></TechBadge>
            ))}
          </div>

          <div className="flex flex-col sm:items-center sm:gap-5 sm:flex-row mt-6 lg:mt-10">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.jpg"
          alt="Foto de perfil"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
