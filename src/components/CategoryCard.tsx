interface CategoryCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const CategoryCard = ({ title, image, onClick }: CategoryCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-primary/50 transition-colors duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center text-white/80">
            <span className="text-sm">استكشف القائمة</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;