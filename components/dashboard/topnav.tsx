"use client";

import { logoutAction } from "@/actions/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";

interface TopNavProps {
  user: { name: string | null; email: string };
}

export function TopNav({ user }: TopNavProps) {
  const initials = user.name
    ? user.name.split(" ").map(n => n[0]).join("").toUpperCase()
    : user.email[0].toUpperCase();

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-end px-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-blue-500 text-white text-xs">
                {initials}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-700 hidden sm:block">
              {user.name ?? user.email}
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="gap-2">
            <User className="h-4 w-4" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="gap-2 text-red-600"
            onClick={() => logoutAction()}
          >
            <LogOut className="h-4 w-4" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}