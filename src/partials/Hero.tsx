import {
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Bonjour ! Je suis <a className="text-yellow-400">ZePandawan</a> 👋
        </>
      }
      description={
        <>
          J'ai réalisé mes études d'ingénieur à{' '}
          <a className="text-yellow-400">Polytech Nancy</a> et mon Brevet de
          Technicien Supérieur au{' '}
          <a className="text-yellow-400">Lycée Henri Loritz</a>.
          <br />
          <br />
          J'ai pu acquérir des compétences en{' '}
          <a className="text-yellow-400">développement FullStack</a> (notamment
          en Java) et en <a className="text-yellow-400">JavaScript</a> au cours
          de mes études et de mes projets personnels.
          <br />
          Dans mon portfolio, vous trouverez une sélection de mes projets
          réalisés qui reflètent ma créativité et ma capacité à résoudre des
          problèmes.
          <br />
          <br />
          N'hésitez pas à me contacter pour discuter de vos besoins en
          développement ou simplement pour échanger des idées !
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/logo.png"
          alt="Logo image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/ZePandawan">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/vincent-reix-30678b20a/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
