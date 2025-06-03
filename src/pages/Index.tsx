import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import NewsSection from "@/components/NewsSection";
import LibrarySidebar from "@/components/LibrarySidebar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("catalog");

  // Примеры книг для каталога
  const featuredBooks = [
    {
      id: "1",
      title: "Война и мир",
      author: "Л.Н. Толстой",
      genre: "Классическая литература",
      year: 1869,
      available: true,
      cover:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      description:
        "Эпический роман о русском обществе в эпоху наполеоновских войн.",
    },
    {
      id: "2",
      title: "Мастер и Маргарита",
      author: "М.А. Булгаков",
      genre: "Мистическая проза",
      year: 1967,
      available: false,
      cover:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description:
        "Роман о добре и зле, любви и предательстве в советской Москве.",
    },
    {
      id: "3",
      title: "Преступление и наказание",
      author: "Ф.М. Достоевский",
      genre: "Психологический роман",
      year: 1866,
      available: true,
      cover:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "История студента Раскольникова и его внутренней борьбы.",
    },
    {
      id: "4",
      title: "1984",
      author: "Джордж Оруэлл",
      genre: "Антиутопия",
      year: 1949,
      available: true,
      cover:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
      description: "Мрачное видение тоталитарного будущего человечества.",
    },
    {
      id: "5",
      title: "Сто лет одиночества",
      author: "Габриэль Гарсиа Маркес",
      genre: "Магический реализм",
      year: 1967,
      available: true,
      cover:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
      description: "Семейная сага рода Буэндиа в вымышленном городе Макондо.",
    },
    {
      id: "6",
      title: "Анна Каренина",
      author: "Л.Н. Толстой",
      genre: "Классическая литература",
      year: 1877,
      available: false,
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      description:
        "История любви и трагедии в высшем свете российского общества.",
    },
  ];

  const renderContent = () => {
    switch (currentSection) {
      case "catalog":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Добро пожаловать в библиотеку
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Откройте для себя мир знаний и литературы
              </p>
            </div>

            <SearchBar />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Icon name="Star" size={24} className="text-yellow-500" />
                  Популярные книги
                </h2>
                <Button variant="outline" className="gap-2">
                  <Icon name="ArrowRight" size={16} />
                  Все книги
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        );

      case "news":
        return <NewsSection />;

      case "about":
        return (
          <div className="max-w-4xl space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                О нашей библиотеке
              </h1>
              <p className="text-xl text-gray-600">
                Место, где знания встречаются с людьми
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Наша история
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Городская библиотека была основана в 1952 году и с тех пор
                  служит центром культурной и образовательной жизни нашего
                  города. За более чем 70 лет работы мы собрали уникальную
                  коллекцию из более чем 100 000 книг.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Наша миссия
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы стремимся обеспечить равный доступ к информации и знаниям
                  для всех жителей города, поддерживать культурное развитие
                  общества и сохранять литературное наследие для будущих
                  поколений.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Статистика
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600">
                    100K+
                  </div>
                  <div className="text-gray-600">Книг в коллекции</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">15K+</div>
                  <div className="text-gray-600">Активных читателей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Ежедневных посетителей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">70+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="max-w-2xl space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">Настройки</h1>

            <div className="space-y-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Профиль пользователя
                </h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Icon name="User" size={16} />
                    Редактировать профиль
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Icon name="Key" size={16} />
                    Изменить пароль
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Уведомления
                </h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Icon name="Bell" size={16} />
                    Настроить уведомления
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Icon name="Mail" size={16} />
                    Email рассылка
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Система
                </h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Icon name="Palette" size={16} />
                    Тема оформления
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Icon name="Globe" size={16} />
                    Язык интерфейса
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <LibrarySidebar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      <div className="container mx-auto px-4 py-8 pr-20">{renderContent()}</div>
    </div>
  );
};

export default Index;
