interface MenuHeaderProps {
  onBackClick?: () => void;
  showBackButton?: boolean;
}

const MenuHeader = ({ onBackClick, showBackButton = false }: MenuHeaderProps) => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>
      
      {showBackButton && (
        <button
          onClick={onBackClick}
          className="absolute top-4 left-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <div className="text-center z-10">
        <img 
          src="/lovable-uploads/3db30246-5bf8-4938-bf08-7ff033d3a71f.png" 
          alt="Miami Seafood Logo" 
          className="w-32 h-32 mx-auto mb-2"
        />
        <p className="text-white text-lg font-medium">من قلب البحر لقلبك</p>
      </div>
    </div>
  );
};

export default MenuHeader;