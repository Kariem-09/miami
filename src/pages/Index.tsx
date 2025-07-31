import { useState } from 'react';
import MenuHeader from '@/components/MenuHeader';
import CategoryCard from '@/components/CategoryCard';
import MenuItem from '@/components/MenuItem';
import { menuCategories, type MenuCategory } from '@/data/menuData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);

  const handleCategoryClick = (category: MenuCategory) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-background">
        <MenuHeader onBackClick={handleBackClick} showBackButton={true} />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {selectedCategory.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategory.items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MenuHeader />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          قائمة الطعام
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
