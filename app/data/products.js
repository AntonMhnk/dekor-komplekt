// Изображения из папки public/images/
const images = {
  paint1: '/images/-1h3uUw4nt-2G2k6A_qz2lDA5hJA1h1Zxig1S02t95xRPZaGzuN_cwWh0eqqi68Yte_lAZF705PLRHiTMm4NZhos.webp',
  paint2: '/images/AfNx4i3eNpmiAlEwymMmy1pvqhYqrMNsmg94ewi4gn3Fe7MrFkDVr-SqgHrqzvGAzbBp8TUoVlyBLPobiBTcpmvY.webp',
  paint3: '/images/aRBPhz4RjUDMc29iMx9Oxtqa8lAleuqZ4mzKgVZjigG6lDPtMJTjTvbwNDuhnaSRc1waJgnh78zihfK5xXCYu_8j.webp',
  plaster1: '/images/EN4LWs-4M-pPutx2FVyLhTx_wTnO30jqmPIzZJidAovx90GUNtu7iEiJ0v06F3FZi1A02jwtfKz9igAokTKXKTWf.webp',
  plaster2: '/images/eYPy5_3n3tJ5d5ebWazQneW8cfk-OaopdJg7A0ZD2T0feZax92_MPMptJTeTYEV7MpNDwXDf9N2z8EIk_8Bdlm8n.webp',
  plaster3: '/images/fJ08JFB-rg8PI2ChKA74qPMAbdBpgU8rlIuZiDpHK5lrvssMLnfCdC6T5dk8bqaw4R-8LDqv0Y3h0acYuX1Z3A1S.webp',
  wallpaper1: '/images/GncO_b-uaNqLeEGK81TnLTenZbi4dpYU1sThR_24kTx5SL89PSQEZ-HB1_waQUT636qIJKxnLQNtQyRh8w9jmMdh.webp',
  wallpaper2: '/images/hMyiqRne_yKFUC8ycU9ZL31K65kc1V3k8T8NJBOgq2nMixxxswu91k1To9jkiPtJ5260gaW3KS4JxYtzGxQQdEtT.webp',
  wallpaper3: '/images/lVkR9959f8z_FEUNoddQBjutcZTQvcwVmxD_bqGDzM51Z6D5tVgQq4JPSHmzLMeeaCZZKjEt276fWVIhQ5qzp-AA.webp',
  fresco1: '/images/NFHSDUk7hCs2n7OwJTP36Z24XZj6F2jkd1N8rkY1nySx47Etk_SEoDPcaFVZy12_Zm-QN5pIx8WXzQUAUOCo04Zr.webp',
  fresco2: '/images/nqJi9qwaxHTC0LK75oeKmInAai5_xQNY09xgr53Iv0FVRqtCJ2sCS_5qp4iL0MVbfmPcfcqyv04L7D323Lj7xE8j.webp',
  molding1: '/images/QkFnAVILgmkFXpd0aMVKEpAeI2qE-fx_RKPZzJTwObk0mZ2QVz4mVw2Z3G67M6m5BQqu0UDb65fzjWf7j-5rpSLZ.webp',
  molding2: '/images/swuXCRCAToR0xJalRZ7kR9iteEto-lRHxuA_2qgoivqWgOpEVmMno_t5oKSSOpj7eszAQag-ezTw9B_p9K6r3LJM.webp',
  molding3: '/images/TlB8F-YHo6T6k_gVebGRgPiIefqV39YEGbZOiaA--ZXtxTKq_YV77eKe7ovpb49V5n7H5m5U44s7rQIBjEKkL_-e.webp',
  flooring1: '/images/TRLIw_s06LBw3eJJ3eFHhskwzspfqts3quxgaIX_voZSOO7dLH7NdDoVdNf-hMV5zi7AxkuO1KwRVrdEW8Zv-8N8.webp',
  flooring2: '/images/uy9WrGZrqXYr2RRdSaDTFwnr3Z7XMzp1wpO3UfY-ml9nJOm-jKBw2Q7vffQIA8AsXu8Ylhxen0SaKoijaOebclmC.webp',
  carpet1: '/images/vg7hwRB5doEAVk-genXlivWceLwwGDYZ-sa2OHSZjVKztNt1BSANrSyFfXO61yoOOOOZkWeUpRpI6puZ_CmFoq5o.webp',
  carpet2: '/images/xoeBYtAxntsJsWndMU5wnf0dB2t9PfPxmXou5u0De7I8a5p8YZRAyX3jnjpl8ArVEbMGBp21b-P0N2MDA0wrEyrY.webp',
  adhesive1: '/images/Y3cJI6-cz9CaIFmv5Es6YILovRHrmtafGuyra6b3O_ds3p1Qfjz-p1XQedo0R5zJ0qJigKt0VLS4fMAqnV8xPfXD.webp',
  adhesive2: '/images/y3L7Gg1y-Faf4ObfSUoUSZajea5zmn9C9w_Ghu3bU9R89aNDFISl1AiwFU0ZETyk1XXxzYcNk57AjJQLFWCIG3JN.webp',
}

export const categories = [
  {
    slug: 'paint',
    name: 'Краска',
    description: 'Премиальные краски для стен и потолков',
    image: images.paint1,
  },
  {
    slug: 'plaster',
    name: 'Декоративная штукатурка',
    description: 'Фактурные и гладкие покрытия',
    image: images.plaster1,
  },
  {
    slug: 'wallpaper',
    name: 'Обои',
    description: 'Дизайнерские обои премиум-класса',
    image: images.wallpaper1,
  },
  {
    slug: 'fresco',
    name: 'Фрески',
    description: 'Художественные фрески и панно',
    image: images.fresco1,
  },
  {
    slug: 'molding',
    name: 'Лепной декор',
    description: 'Карнизы, молдинги и розетки',
    image: images.molding1,
  },
  {
    slug: 'flooring',
    name: 'Пол',
    description: 'Паркет, ламинат и плитка',
    image: images.flooring1,
  },
  {
    slug: 'carpet',
    name: 'Ковры',
    description: 'Дизайнерские ковры ручной работы',
    image: images.carpet1,
  },
  {
    slug: 'adhesive',
    name: 'Клеевые материалы',
    description: 'Профессиональные клеи и грунтовки',
    image: images.adhesive1,
  },
]

export const products = [
  // Краска
  {
    id: 1,
    slug: 'kraska-velvet-matte',
    name: 'Краска интерьерная Velvet Matte',
    price: 4500,
    category: 'Краска',
    categorySlug: 'paint',
    image: images.paint1,
    isNew: true,
    description: 'Матовая интерьерная краска премиум-класса с бархатистым финишем.',
  },
  {
    id: 2,
    slug: 'kraska-weathershield',
    name: 'Краска фасадная WeatherShield',
    price: 5200,
    oldPrice: 6000,
    category: 'Краска',
    categorySlug: 'paint',
    image: images.paint2,
    isSale: true,
    description: 'Устойчивая к погодным условиям фасадная краска.',
  },
  {
    id: 3,
    slug: 'kraska-pearl',
    name: 'Краска акриловая Pearl',
    price: 3800,
    category: 'Краска',
    categorySlug: 'paint',
    image: images.paint3,
    description: 'Акриловая краска с перламутровым эффектом.',
  },

  // Декоративная штукатурка
  {
    id: 4,
    slug: 'shtukaturka-venice-premium',
    name: 'Штукатурка Venice Premium',
    price: 8500,
    category: 'Декоративная штукатурка',
    categorySlug: 'plaster',
    image: images.plaster1,
    isNew: true,
    description: 'Венецианская штукатурка с эффектом мрамора.',
  },
  {
    id: 5,
    slug: 'shtukaturka-travertino',
    name: 'Штукатурка Travertino',
    price: 7200,
    category: 'Декоративная штукатурка',
    categorySlug: 'plaster',
    image: images.plaster2,
    description: 'Декоративная штукатурка с эффектом травертина.',
  },
  {
    id: 6,
    slug: 'shtukaturka-silk-touch',
    name: 'Штукатурка Silk Touch',
    price: 6800,
    oldPrice: 7500,
    category: 'Декоративная штукатурка',
    categorySlug: 'plaster',
    image: images.plaster3,
    isSale: true,
    description: 'Штукатурка с шелковистым финишем.',
  },

  // Обои
  {
    id: 7,
    slug: 'oboi-geometric-art',
    name: 'Обои Geometric Art',
    price: 12000,
    category: 'Обои',
    categorySlug: 'wallpaper',
    image: images.wallpaper1,
    isNew: true,
    description: 'Дизайнерские обои с геометрическим узором.',
  },
  {
    id: 8,
    slug: 'oboi-botanical-garden',
    name: 'Обои Botanical Garden',
    price: 9500,
    category: 'Обои',
    categorySlug: 'wallpaper',
    image: images.wallpaper2,
    description: 'Обои с ботаническим принтом.',
  },
  {
    id: 9,
    slug: 'oboi-minimalist-line',
    name: 'Обои Minimalist Line',
    price: 8000,
    category: 'Обои',
    categorySlug: 'wallpaper',
    image: images.wallpaper3,
    description: 'Минималистичные обои в пастельных тонах.',
  },

  // Фрески
  {
    id: 10,
    slug: 'freska-renaissance',
    name: 'Фреска Renaissance',
    price: 45000,
    category: 'Фрески',
    categorySlug: 'fresco',
    image: images.fresco1,
    isNew: true,
    description: 'Фреска в стиле эпохи Возрождения.',
  },
  {
    id: 11,
    slug: 'freska-modern-abstract',
    name: 'Фреска Modern Abstract',
    price: 35000,
    category: 'Фрески',
    categorySlug: 'fresco',
    image: images.fresco2,
    description: 'Современная абстрактная фреска.',
  },

  // Лепной декор
  {
    id: 12,
    slug: 'karniz-classic',
    name: 'Карниз потолочный Classic',
    price: 2500,
    category: 'Лепной декор',
    categorySlug: 'molding',
    image: images.molding1,
    description: 'Классический потолочный карниз.',
  },
  {
    id: 13,
    slug: 'rozetka-ornament',
    name: 'Розетка потолочная Ornament',
    price: 4800,
    oldPrice: 5500,
    category: 'Лепной декор',
    categorySlug: 'molding',
    image: images.molding2,
    isSale: true,
    description: 'Декоративная потолочная розетка.',
  },
  {
    id: 14,
    slug: 'molding-art-deco',
    name: 'Молдинг настенный Art Deco',
    price: 1800,
    category: 'Лепной декор',
    categorySlug: 'molding',
    image: images.molding3,
    isNew: true,
    description: 'Настенный молдинг в стиле ар-деко.',
  },

  // Пол
  {
    id: 15,
    slug: 'parket-natural-oak',
    name: 'Паркет дубовый Natural Oak',
    price: 9500,
    category: 'Пол',
    categorySlug: 'flooring',
    image: images.flooring1,
    description: 'Натуральный дубовый паркет.',
  },
  {
    id: 16,
    slug: 'laminat-premium-walnut',
    name: 'Ламинат Premium Walnut',
    price: 3200,
    category: 'Пол',
    categorySlug: 'flooring',
    image: images.flooring2,
    description: 'Ламинат премиум-класса с текстурой ореха.',
  },

  // Ковры
  {
    id: 17,
    slug: 'kover-persian-heritage',
    name: 'Ковер Persian Heritage',
    price: 85000,
    category: 'Ковры',
    categorySlug: 'carpet',
    image: images.carpet1,
    isNew: true,
    description: 'Персидский ковер ручной работы.',
  },
  {
    id: 18,
    slug: 'kover-modern-geometric',
    name: 'Ковер Modern Geometric',
    price: 32000,
    oldPrice: 38000,
    category: 'Ковры',
    categorySlug: 'carpet',
    image: images.carpet2,
    isSale: true,
    description: 'Современный ковер с геометрическим рисунком.',
  },

  // Клеевые материалы
  {
    id: 19,
    slug: 'klej-probond',
    name: 'Клей для обоев ProBond',
    price: 850,
    category: 'Клеевые материалы',
    categorySlug: 'adhesive',
    image: images.adhesive1,
    description: 'Профессиональный клей для всех типов обоев.',
  },
  {
    id: 20,
    slug: 'gruntovka-universal-prime',
    name: 'Грунтовка Universal Prime',
    price: 1200,
    category: 'Клеевые материалы',
    categorySlug: 'adhesive',
    image: images.adhesive2,
    isNew: true,
    description: 'Универсальная грунтовка глубокого проникновения.',
  },
]

export const getProductById = (id) => {
  return products.find((p) => p.id === Number(id))
}

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug)
}

export const getProductsByCategory = (categorySlug) => {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export const getCategoryBySlug = (slug) => {
  return categories.find((c) => c.slug === slug)
}

export const getNewProducts = () => {
  return products.filter((p) => p.isNew)
}

export const getSaleProducts = () => {
  return products.filter((p) => p.isSale)
}
