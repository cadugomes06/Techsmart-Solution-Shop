import { useQuery } from "react-query";
import axios, { AxiosPromise } from 'axios';
import { ProductsResponse } from "../interfaces/products-data";

const BASE_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC'

export const fetchData = async (): AxiosPromise<ProductsResponse> => {
    const response = await axios.get<ProductsResponse>(BASE_URL)
    return response
}

export function useProductsData() {
    const query = useQuery({
        queryKey: ['products-data'],
        queryFn: fetchData
    })    
    return {
        ...query,
        data: query?.data?.data       
    }
} 
