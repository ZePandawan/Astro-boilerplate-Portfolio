import { ColorTags, Section, Tags } from 'astro-boilerplate-components';

import { Project } from '@/components/Project';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <a className="text-yellow-400">Projects</a>
      </>
    }
  >
    <div className="flex flex-col gap-6 text-yellow-400">
      <Project
        name="Portfolio Astro"
        description="Création de mon portfolio avec Astro, React et Tailwind CSS. Basé sur le répo de ixartz : https://github.com/ixartz/Astro-boilerplate."
        link="https://github.com/ZePandawan/Astro-boilerplate-Portfolio"
        img={{
          src: '/assets/images/astro-icon.svg',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="4Tip Bot Discord"
        description="Création d'un bot Discord nommé 4Tip. Découvrez les fonctionnalités sur le GitHub associé !"
        link="https://github.com/ZePandawan/4Tip"
        img={{ src: '/assets/images/discord-icon.png', alt: 'Discord Icon' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>NodeJS</Tags>
            <Tags color={ColorTags.VIOLET}>Discord API</Tags>
          </>
        }
      />
      <Project
        name="BigCloud"
        description="Création d'un cloud auto hébergé développé en JavaEE. Possibilité de stocker des fichiers, de les partager et de les télécharger."
        link="https://github.com/ZePandawan/BigCloud"
        img={{ src: '/assets/images/cloud-icon.png', alt: 'Cloud Icon' }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>JavaEE</Tags>
            <Tags color={ColorTags.ORANGE}>Eclipse</Tags>
            <Tags color={ColorTags.BLUE}>Cloud</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
