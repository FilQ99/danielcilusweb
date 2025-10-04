// src/types.ts

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  technologies: string[];
  description: string;
  projectUrl?: string;
  githubUrl?: string;
}