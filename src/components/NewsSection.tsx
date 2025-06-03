import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
}

const NewsSection = () => {
  const news: NewsItem[] = [
    {
      id: "1",
      title: "Новые поступления: 200 книг современной литературы",
      date: "25 мая 2024",
      summary:
        "В нашей библиотеке появились новые произведения российских и зарубежных авторов.",
      category: "Поступления",
    },
    {
      id: "2",
      title: "Литературный вечер с участием местных авторов",
      date: "20 мая 2024",
      summary:
        "Приглашаем на встречу с писателями нашего города. Вход свободный.",
      category: "События",
    },
    {
      id: "3",
      title: "Обновление электронного каталога",
      date: "15 мая 2024",
      summary:
        "Улучшен поиск и добавлены новые фильтры для удобства читателей.",
      category: "Системы",
    },
    {
      id: "4",
      title: "Детский кружок «Юные читатели» начинает новый сезон",
      date: "12 мая 2024",
      summary:
        "Запись открыта для детей от 6 до 12 лет. Встречи по субботам в 15:00.",
      category: "Детские мероприятия",
    },
    {
      id: "5",
      title: "Выставка редких книг XIX века",
      date: "8 мая 2024",
      summary:
        "Представлены уникальные издания из фондов библиотеки. Выставка продлится до конца месяца.",
      category: "Выставки",
    },
    {
      id: "6",
      title: "Модернизация читального зала завершена",
      date: "3 мая 2024",
      summary:
        "Установлены новые столы, кресла и улучшено освещение для комфортного чтения.",
      category: "Ремонт",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Newspaper" size={24} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Новости библиотеки</h2>
      </div>

      {news.map((item) => (
        <Card key={item.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start gap-4">
              <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                {item.title}
              </CardTitle>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full whitespace-nowrap">
                {item.category}
              </span>
            </div>
            <CardDescription className="text-sm text-gray-500">
              {item.date}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.summary}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsSection;
