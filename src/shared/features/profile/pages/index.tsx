import SidebarProfileUser from "@/shared/layouts/sidebarUser";
import { useGetProduct } from "../../produk/hooks/api";

export default function ProfilePage(){
    const {}  = useGetProduct()
    return (
        <>
        <SidebarProfileUser />
        </>
    )
}