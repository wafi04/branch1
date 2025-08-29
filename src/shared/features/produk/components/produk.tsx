"use client"

import SidebarProfileUser from "@/shared/layouts/sidebarUser"
import { useGetProduct } from "../hooks/api"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ProductData } from "@/shared/types/productWithProvider"


export default function Products() {
  const { data } = useGetProduct()
  const productData: ProductData[] = data?.data.data ?? []

  return (
    <main className="flex">
      {/* Sidebar tetap fixed */}
      <SidebarProfileUser />

      {/* Konten utama */}
      <div className="flex-1 p-6 lg:pl-80"> 
        {/* lg:pl-80 biar konten geser sejajar sidebar */}
        <h1 className="text-xl font-bold mb-4">Products</h1>
        <div className="rounded-md border overflow-x-auto">
         {
            JSON.stringify(productData)
         }

        </div>
      </div>
    </main>
  )
}
