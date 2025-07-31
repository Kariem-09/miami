interface MenuItemProps {
  name: string;
  price: string;
  image: string;
  description?: string;
}

const MenuItem = ({ name, price, image, description }: MenuItemProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-foreground text-lg">{name}</h4>
          <span className="text-primary font-bold text-lg">{price}</span>
        </div>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default MenuItem;