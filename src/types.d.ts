export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductMutation {
  title: string;
  description: string;
  price: string;
  image: File | null;
}