export interface Product {
  id: string;
  title: string;
  description: string;
  url: string;
  status: 'released' | 'beta' | 'development' | 'archived';
  tags: string[];
  isFeatured: boolean;
  releaseDate?: string;
  article?: {
    tagline: string;
    features: string[];
    targetUsers: string;
    howToUse: { title: string; description: string }[];
    background: string;
    screenshots: string[];
  };
}
