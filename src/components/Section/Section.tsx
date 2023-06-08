interface SectionProps {
  children: any;
}

const Section = ({ children }: SectionProps) => (
  <section className="flex w-full max-w-screen-xl flex-col">{children}</section>
);

export default Section;
