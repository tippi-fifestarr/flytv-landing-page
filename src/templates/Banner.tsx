import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Don't stop believing. FLYTV (T is for Team)"
      subtitle="Start your Free Trial Flight"
      button={
        <Link href="https://calendly.com/discordian/1-on-1-discordian?month=2022-03">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
