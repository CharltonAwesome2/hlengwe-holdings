import Section from '../components/Section';
import PartnerGrid from '../components/PartnerGrid';

export default function Partners() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Partners</h1>
        <p>Collaborating with leading public and private institutions across South Africa.</p>
      </div>

      <Section title="Strategic Partnerships">
        <PartnerGrid />
      </Section>
    </>
  );
}