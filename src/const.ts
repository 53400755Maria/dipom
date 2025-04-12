export const Setting = {
  flowerOffersCount: 31, // Для главной страницы
  fullOffersCount: 5,    // Для страницы избранного
  offersCount: 12,       // Для страницы предложения

  // Дефолтное предложение
  defaultOffer: {
    id: '1',
    title: 'Розовая нежность',
    price: 2990,
    images: [
      'img/bouquet-detail-1.jpg',
      'img/bouquet-detail-2.jpg',
      'img/bouquet-detail-3.jpg'
    ],
    type: 'Букет из роз',
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    description: [
      'Роскошный букет из свежих эквадорских роз',
      'Идеально для романтических поводов'
    ],
    features: {
      type: 'Букет',
      flowersCount: '15 роз',
      size: 'Диаметр 40 см'
    },
    contents: [
      'Розы эквадорские - 15 шт',
      'Пионы - 3 шт',
      'Эвкалипт',
      'Декоративная зелень',
      'Упаковка - крафт-бумага'
    ],
    careTips: [
      'Подрезать стебли под углом 45°',
      'Менять воду каждые 2 дня',
      'Хранить в прохладном месте'
    ],
    reviewsCount: 8,
    similarOffers: [
      {
        id: '2',
        title: 'Нежность',
        price: 2490,
        image: 'img/bouquet-similar-1.jpg',
        type: 'Розы, гипсофила',
        isPremium: false,
        rating: 4.5
      },
      {
        id: '3',
        title: 'Розовый рассвет',
        price: 3290,
        image: 'img/bouquet-similar-2.jpg',
        type: 'Пионы, розы',
        isPremium: true,
        rating: 4.9
      }
    ]
  },

  offers: [
    {
      id: '1',
      title: 'Розовая нежность',
      price: 2990,
      image: 'img/bouquet-1.jpg',
      type: 'Розы, пионы',
      isPremium: true,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Нежность',
      price: 2490,
      image: 'img/bouquet-2.jpg',
      type: 'Розы, гипсофила',
      isPremium: false,
      rating: 4.5
    }
    // ... другие предложения
  ]
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export type AuthorizationStatusType = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

export type AppRouteType = keyof typeof AppRoute;