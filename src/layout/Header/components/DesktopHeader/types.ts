export type ExpandableLink = {
  content: string;
  address: string;
  sublinks: SectionLink[];
}

export type SectionLink = {
  sectionTitle: string;
  sectionLinks: HeaderLink[];
}

export type HeaderLink = {
  content: string;
  address: string;
}