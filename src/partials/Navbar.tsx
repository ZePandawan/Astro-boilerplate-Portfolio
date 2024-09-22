import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <img
          style={{ marginTop: '10px' }}
          className="h-16 w-16"
          src="/assets/images/logo.png"
          alt="Logo image"
          loading="lazy"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
