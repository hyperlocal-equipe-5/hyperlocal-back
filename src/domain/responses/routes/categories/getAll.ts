type getAllCategories = {
  error: boolean;
  statusCode: number;
  message: string;
  categories: {
    id: string;
    name: string;
    products: {
      limit: number;
      offset: number;
      list: Product[];
    };
  };
};
