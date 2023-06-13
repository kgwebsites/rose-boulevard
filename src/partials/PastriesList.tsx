import { Section } from 'astro-boilerplate-components';

import { Pastry } from '@/components/Pastry';

const PastriesList = () => (
  <Section
    title={
      <>
        <h2 id="pastries" className="text-[#7E643D]">
          Pastries
        </h2>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Pastry
        title="Cranberry Bliss Bar"
        img={<img src="/assets/images/cranberry-bliss-bars.jpg" />}
        description={
          <>
            <p className="mb-2 text-gray-400">
              A heavenly fusion of flavors and effects. A chewy blondie base
              infused with premium cannabis, delicately balanced with the
              tartness of dried cranberries, and generously studded with white
              chocolate chunks. The buttery richness of the bar pairs perfectly
              with the fruity tang of the cranberries, creating a harmonious
              taste sensation
            </p>
            <p>50mg THC per bar</p>
          </>
        }
      />
      <Pastry
        title="Snickerdoodle Cream Cookies"
        img={<img src="/assets/images/snickerdoodle-cookies.jpg" />}
        description={
          <>
            <p className="mb-2 text-gray-400">
              This delectable treat starts with a carrot cake base with
              snickerdoodle flavors, boasting a soft and chewy texture with a
              slightly crisp exterior. Once you bite inside, you'll discover a
              delicious a cream cheese filling.
            </p>
            <p>50mg THC per bar</p>
          </>
        }
      />
    </div>
  </Section>
);

export { PastriesList };
