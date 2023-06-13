import { HeroAvatar, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Welcome to Rose Boulevard</>}
      description={
        <>
          Welcome to Rose Boulevard, where we infuse the world of baked goods
          with the incredible benefits of cannabis. Our passion for crafting
          delectable treats knows no bounds, and we are thrilled to share our
          creations with you.
        </>
      }
      avatar={null}
      socialButtons={null}
    />
  </Section>
);

export { Hero };
