import { BoxIcon, Shield, User, Wallet } from "lucide-react";

export const menuItems = [
    {
      icon: User,
      label: "Profile Saya",
      href: "/profile",
      badge: null
    },
    {
      icon: Wallet,
      label: "Saldo & Transaksi", 
      href: "/profile/wallet",
      badge: "Rp 125.000"
    },
    {
      icon: BoxIcon,
      label: "Produk",
      href: "/profile/product",
      badge: null
    },
    {
      icon: Shield,
      label: "Keamanan",
      href: "/security",
      badge: null
    },
  ];