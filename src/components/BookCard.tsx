import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  available: boolean;
  cover: string;
  description: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
            book.available
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {book.available ? "Доступна" : "Занята"}
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
          {book.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {book.author} • {book.year}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
            {book.genre}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {book.description}
        </p>

        <Button
          className={`w-full ${book.available ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"}`}
          disabled={!book.available}
        >
          <Icon name={book.available ? "BookOpen" : "Clock"} size={16} />
          {book.available ? "Забронировать" : "В очереди"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
