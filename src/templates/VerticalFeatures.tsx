import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Github Username Required"
    description={`Lorem ipsum is not enough.  Even if you are not a Fullstack Developer, using Git is a useful Gift! <span className="text-primary-200">Flytv</span>, begins before the GitHub project is ever created.  From Team (or Team of 1, we'll pursuade you later why solo hacking is lame) to your own Space to Idea to Project Complete NFT.`}
  >
    <VerticalFeatureRow
      title="Looking for a Team?"
      description="Lorem Team has only 2 people, a mission I believe in, and they need someone with my Skills! ipsum dolor sit amet, consectetur adipiscing elit. "
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Everybody wants a thrill!"
      description="Some will win, some will win less. We built this for the losers, for the small-town girls living in this lonely world. Let FLYTV streamline the experience, saving time for friendly chat and knowledge sharing."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="We've got the rocket. What are you waiting for? Get Started and Fly:"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
