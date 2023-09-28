import { z } from 'zod';
import { useQuery } from '../APIProvider';

const Product = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number()
});
export type Product = z.infer<typeof Product>;

const Products = z.array(Product);
export type Products = z.infer<typeof Products>;

export const useProducts = () => {
  return useQuery(['products'], async () => {
    const response = await fetch('https://run.mocky.io/v3/9430765a-b6c2-480c-a61b-ed259a4dd466');
    const data = await response.json();
    return Products.parse(data);
  });
};
