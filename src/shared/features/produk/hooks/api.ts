import { api } from "@/lib/axios";
import { ProductData } from "@/shared/types/productWithProvider";
import { API_RESPONSE, ApiPagination } from "@/shared/types/response";
import { useQuery } from "@tanstack/react-query";

export function useGetProduct(){
    const {data,isLoading,error}  = useQuery({
        queryKey : ["product_branch"],
        queryFn : async( )  => {
            const req = await api.get<ApiPagination<ProductData[]>>("/reseller/product")

            return req.data
        }
    })

    return {
        data,
        isLoading,
        error
    }
}