import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/leelakrishnan/FlyTV">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=1k8craCGpgs">
            <a>Demo Video NFT</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Home for Hackathons Landing: \n'}
            <span className="text-primary-500">Flytv</span> (the v is for ducks)
          </>
        }
        description="Lorem ipsum automatically generated from your Team and Project Dashboards. A hyperstructure of best practices, streamlined sign-up, and team formation. <br> Flyt V: <Br> with you 🐤 from Roadmap to 🦆 Next Steps into Flightpath 🦅!"
        button={
          <Link href="https://dynamiccryptogaming.com">
            <a>
              <Button xl>Start to Fly</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
