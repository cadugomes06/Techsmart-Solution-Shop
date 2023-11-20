export interface ProductsData {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
    createAt: string,
    updateAt: string,
    quantity: number 
  }

  export interface ProductsResponse {
    data: ProductsData[],
    products: ProductsData[]
  }