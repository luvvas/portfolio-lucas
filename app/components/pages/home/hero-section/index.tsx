import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lb:pb-[110px]">
      <div className="container flex justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Lucas Machado</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Lucas Machado e 23 anos e atualmente curso Análise e Desenvolvimento de Sistemas pela UFPR. Sou um desenvolvedor full-stack, e meu objetivo nesse projeto é estudar next.js e tailwaind enquanto crio um portifolio para o meu currículo.</p>
          
          <div>
            techs
          </div>

          <div>
            contato
          </div>
        </div>

        <Image width={420} height={404} src="/images/profile-pic.jpg" alt="Foto de perfil">
          
        </Image>
      </div>
    </section>
  )
}