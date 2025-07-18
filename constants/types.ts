export interface TTechnology {
  icon: string;
  name: string;
}

export interface TProject {
  duration: string;
  position: string;
  description: string;
  technologies: TTechnology[];
  image: {
    src: string;
    alt: string;
  };
  identity: {
    title: string;
    description: string;
    link: {
      href: string;
      text: string;
    };
  };
}
