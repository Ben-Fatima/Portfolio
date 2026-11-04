export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  openToWork: string;
  about: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  tech: string[];
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type Links = {
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
};

// Metadata each case study exports from its MDX file.
export type CaseStudyMeta = {
  title: string;
  summary: string;
  stack: string[];
};

// Ordered index for the homepage, personal projects only; professional
// experience is mentioned, not written up.
export type WorkEntry = { slug: string } & CaseStudyMeta;
