import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface SidebarProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const LibrarySidebar = ({ onSectionChange, currentSection }: SidebarProps) => {
  const menuItems = [
    { id: "catalog", label: "Каталог", icon: "Library" },
    { id: "news", label: "Новости", icon: "Newspaper" },
    { id: "about", label: "О нас", icon: "Info" },
    { id: "settings", label: "Настройки", icon: "Settings" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
        >
          <Icon name="Menu" size={20} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <SheetTitle className="text-xl font-bold flex items-center gap-2">
            <Icon name="Library" size={24} />
            Городская Библиотека
          </SheetTitle>
          <SheetDescription className="text-purple-100">
            Навигация по разделам
          </SheetDescription>
        </SheetHeader>

        <div className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start gap-3 py-3 text-left ${
                  currentSection === item.id
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-50 text-gray-700"
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon name={item.icon as any} size={20} />
                {item.label}
              </Button>
            ))}
          </nav>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-2">Быстрые действия:</p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start gap-2"
                >
                  <Icon name="User" size={16} />
                  Мой профиль
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start gap-2"
                >
                  <Icon name="Heart" size={16} />
                  Избранное
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start gap-2"
                >
                  <Icon name="Clock" size={16} />
                  История
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LibrarySidebar;
