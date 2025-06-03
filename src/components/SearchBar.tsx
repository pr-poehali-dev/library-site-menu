import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Логика поиска будет добавлена позже
    console.log("Поиск:", searchQuery);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative flex gap-2">
        <Input
          type="text"
          placeholder="Поиск книг, авторов, жанров..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-lg py-3 pl-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-purple-400 transition-colors"
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button
          onClick={handleSearch}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors"
        >
          <Icon name="Search" size={20} />
          Найти
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
