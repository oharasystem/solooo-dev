export interface Product {
  id: string;
  title: string;
  description: string;
  url: string;
  status: 'released' | 'beta' | 'development' | 'archived';
  tags: string[];
  isFeatured: boolean;
}
