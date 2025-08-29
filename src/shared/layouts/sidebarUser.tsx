"use client"

import { useState } from "react"
import { User, LogOut, ChevronRight, Edit3 } from "lucide-react"
import { menuItems } from "../data/menuSidebarItems"
import Link from "next/link"
import { useAuthStore } from "../hooks/authStore"

export default function SidebarProfileUser() {
  const [isOpen, setIsOpen] = useState(false)

  const { user } = useAuthStore()

  return (
    <div className="relative">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-1 min-h-0 bg-sidebar-background">
          {/* User Profile Header */}
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="px-6 pb-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-ring"
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username}`}
                    alt={user?.username}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-sidebar-foreground truncate">{user?.username}</h2>
                    <Edit3 className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mt-2">
                    {user?.role_name}
                  </span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="mt-6 px-3">
              <div className="space-y-1">
                {menuItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="group flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent transition-all duration-200"
                    >
                      <div className="flex items-center">
                        <Icon className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                        <span>{item.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.label === "Notifikasi"
                                ? "bg-destructive text-destructive-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Logout Button */}
            <div className="px-3 mt-auto pb-4">
              <button className="group flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg text-destructive hover:text-destructive-foreground hover:bg-destructive/10 transition-all duration-200">
                <LogOut className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-background shadow-lg border border-border"
        >
          <User className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Sidebar */}
          <div className="fixed inset-y-0 left-0 w-80 bg-sidebar-background shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <h2 className="text-lg font-semibold text-sidebar-foreground">Menu Profile</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  ×
                </button>
              </div>

              {/* User Profile (Mobile) */}
              <div className="px-4 py-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <img
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-ring"
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username}`}
                    alt={user?.username}
                  />
                  <div>
                    <h3 className="text-sm font-medium text-sidebar-foreground">{user?.username}</h3>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 px-4 py-4 overflow-y-auto">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
                      >
                        <div className="flex items-center">
                          <Icon className="mr-3 h-5 w-5" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )
                  })}
                </nav>
              </div>

              <div className="px-4 py-4 border-t border-border">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg text-destructive hover:text-destructive-foreground hover:bg-destructive/10"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
