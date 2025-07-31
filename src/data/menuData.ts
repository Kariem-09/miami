import appetizersImg from '@/assets/appetizers.jpg';
import mainCoursesImg from '@/assets/main-courses.jpg';
import pastaImg from '@/assets/pasta.jpg';
import specialtiesImg from '@/assets/specialties.jpg';
import beveragesImg from '@/assets/beverages.jpg';
import dessertsImg from '@/assets/desserts.jpg';

import shrimpSkewersImg from '@/assets/shrimp-skewers.jpg';
import oystersImg from '@/assets/oysters.jpg';
import calamariImg from '@/assets/calamari.jpg';
import salmonImg from '@/assets/salmon.jpg';
import seaBassImg from '@/assets/sea-bass.jpg';
import lobsterThermidorImg from '@/assets/lobster-thermidor.jpg';

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  image: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'appetizers',
    title: 'المقبلات البحرية',
    image: appetizersImg,
    items: [
      {
        id: 'shrimp-skewers',
        name: 'أسياخ الجمبري المشوي',
        price: '65 ريال',
        image: shrimpSkewersImg,
        description: 'جمبري طازج مشوي مع الليمون والأعشاب'
      },
      {
        id: 'oysters',
        name: 'محار طازج',
        price: '45 ريال',
        image: oystersImg,
        description: 'محار طازج مع صلصة الليمون'
      },
      {
        id: 'calamari',
        name: 'حلقات الكاليماري',
        price: '55 ريال',
        image: calamariImg,
        description: 'حلقات كاليماري مقرمشة مع صلصة المارينارا'
      },
      {
        id: 'crab-cakes',
        name: 'كعك السلطعون',
        price: '70 ريال',
        image: shrimpSkewersImg,
        description: 'كعك السلطعون الطازج مع صلصة الأيولي'
      },
      {
        id: 'mussels',
        name: 'بلح البحر بالنبيذ الأبيض',
        price: '50 ريال',
        image: oystersImg,
        description: 'بلح البحر الطازج مطبوخ بالنبيذ الأبيض والأعشاب'
      }
    ]
  },
  {
    id: 'main-courses',
    title: 'الأطباق الرئيسية',
    image: mainCoursesImg,
    items: [
      {
        id: 'grilled-salmon',
        name: 'سلمون مشوي',
        price: '95 ريال',
        image: salmonImg,
        description: 'فيليه سلمون طازج مشوي مع الخضار'
      },
      {
        id: 'sea-bass',
        name: 'قاروس البحر المشوي',
        price: '85 ريال',
        image: seaBassImg,
        description: 'قاروس البحر كامل مشوي مع الليمون والأعشاب'
      },
      {
        id: 'lobster-thermidor',
        name: 'لوبستر ثيرميدور',
        price: '150 ريال',
        image: lobsterThermidorImg,
        description: 'لوبستر طازج مع صلصة الجبن الكريمية'
      },
      {
        id: 'mixed-grill',
        name: 'مشكل مأكولات بحرية مشوي',
        price: '120 ريال',
        image: salmonImg,
        description: 'تشكيلة من المأكولات البحرية المشوية'
      },
      {
        id: 'fish-curry',
        name: 'كاري السمك',
        price: '75 ريال',
        image: seaBassImg,
        description: 'سمك طازج مطبوخ بصلصة الكاري الهندية'
      }
    ]
  },
  {
    id: 'pasta',
    title: 'المعكرونة البحرية',
    image: pastaImg,
    items: [
      {
        id: 'seafood-linguine',
        name: 'لينغويني بالمأكولات البحرية',
        price: '80 ريال',
        image: pastaImg,
        description: 'معكرونة لينغويني مع الجمبري وبلح البحر'
      },
      {
        id: 'lobster-ravioli',
        name: 'رافيولي اللوبستر',
        price: '110 ريال',
        image: lobsterThermidorImg,
        description: 'رافيولي محشو بلحم اللوبستر الطازج'
      },
      {
        id: 'shrimp-scampi',
        name: 'جمبري سكامبي',
        price: '85 ريال',
        image: shrimpSkewersImg,
        description: 'جمبري بالثوم والنبيذ الأبيض مع الباستا'
      },
      {
        id: 'clam-pasta',
        name: 'معكرونة بالمحار',
        price: '70 ريال',
        image: oystersImg,
        description: 'معكرونة بالمحار الطازج والنبيذ الأبيض'
      }
    ]
  },
  {
    id: 'specialties',
    title: 'أطباق مميزة',
    image: specialtiesImg,
    items: [
      {
        id: 'seafood-platter',
        name: 'طبق المأكولات البحرية المميز',
        price: '200 ريال',
        image: specialtiesImg,
        description: 'تشكيلة فاخرة من أفضل المأكولات البحرية'
      },
      {
        id: 'paella',
        name: 'بايلا المأكولات البحرية',
        price: '130 ريال',
        image: pastaImg,
        description: 'أرز البايلا الإسباني التقليدي بالمأكولات البحرية'
      },
      {
        id: 'whole-fish',
        name: 'سمك كامل مشوي',
        price: '90 ريال',
        image: seaBassImg,
        description: 'سمك طازج كامل مشوي على الفحم'
      },
      {
        id: 'seafood-soup',
        name: 'شوربة المأكولات البحرية',
        price: '40 ريال',
        image: appetizersImg,
        description: 'شوربة غنية بالمأكولات البحرية الطازجة'
      }
    ]
  },
  {
    id: 'beverages',
    title: 'المشروبات',
    image: beveragesImg,
    items: [
      {
        id: 'fresh-juice',
        name: 'عصير طازج',
        price: '25 ريال',
        image: beveragesImg,
        description: 'تشكيلة من العصائر الطازجة'
      },
      {
        id: 'soft-drinks',
        name: 'مشروبات غازية',
        price: '15 ريال',
        image: beveragesImg,
        description: 'كوكا كولا، بيبسي، سبرايت'
      },
      {
        id: 'coffee',
        name: 'قهوة',
        price: '20 ريال',
        image: beveragesImg,
        description: 'قهوة عربية أو تركية'
      },
      {
        id: 'tea',
        name: 'شاي',
        price: '15 ريال',
        image: beveragesImg,
        description: 'شاي أحمر أو أخضر'
      }
    ]
  },
  {
    id: 'desserts',
    title: 'الحلويات',
    image: dessertsImg,
    items: [
      {
        id: 'tiramisu',
        name: 'تيراميسو',
        price: '35 ريال',
        image: dessertsImg,
        description: 'تيراميسو إيطالي كلاسيكي'
      },
      {
        id: 'lemon-tart',
        name: 'تارت الليمون',
        price: '30 ريال',
        image: dessertsImg,
        description: 'تارت الليمون الطازج'
      },
      {
        id: 'chocolate-mousse',
        name: 'موس الشوكولاتة',
        price: '32 ريال',
        image: dessertsImg,
        description: 'موس الشوكولاتة الداكنة'
      },
      {
        id: 'fruit-salad',
        name: 'سلطة فواكه',
        price: '25 ريال',
        image: dessertsImg,
        description: 'تشكيلة من الفواكه الطازجة'
      }
    ]
  }
];