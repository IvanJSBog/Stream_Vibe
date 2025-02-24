import categoryItems from "@/sections/Categories/catagoryItems.js"

const collectionGroups = [
  {
    isActive: true,
    title: "Movies",
    items: [
      {
        title: "Our Genres",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            498: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              spaceBetween: 30,
            },
          },
        },
      },
      {
        title: "Trending Now",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "India Movie",
            imgSrc: "/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Another India Movie",
            imgSrc: "/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant man",
            imgSrc: "/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "India Movie",
            imgSrc: "/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Another India Movie",
            imgSrc: "/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant man",
            imgSrc: "/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "India Movie",
            imgSrc: "/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Another India Movie",
            imgSrc: "/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant man",
            imgSrc: "/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "India Movie",
            imgSrc: "/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Another India Movie",
            imgSrc: "/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant man",
            imgSrc: "/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },
        ],
      },
      {
        title: "New Releases",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/2.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/3.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/4.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/5.jpg",
            label: "14 April 2023",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/2.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/3.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/4.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/5.jpg",
            label: "14 April 2023",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/2.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/3.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/4.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/5.jpg",
            label: "14 April 2023",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/2.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/3.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/4.jpg",
            label: "14 April 2023",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/5.jpg",
            label: "14 April 2023",
          },
        ],
      },
      {
        title: "Must - Watch Movies",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            498: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              spaceBetween: 30,
            },
          },
        },
      },
    ],
  },
  {
    title: "Shows",
    items: [
      {
        title: "Our Genres 2",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "top 10 in",
            images: [
              "/images/categories/action/1.jpg",
              "/images/categories/action/2.jpg",
              "/images/categories/action/3.jpg",
              "/images/categories/action/4.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            498: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              spaceBetween: 30,
            },
          },
        },
      },
      {
        title: "Trending Shows Now",
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            498: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              spaceBetween: 30,
            },
          },
        },
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
        ],
      },
      {
        title: "New Released Shows",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 season",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            498: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              spaceBetween: 30,
            },
          },
        },
      },
      {
        title: "Must - Watch Shows",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/images/movies/1.jpg",
            duration: "2h 20min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            498: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              spaceBetween: 30,
            },
          },
        },
      },
    ],
  },
]
export default collectionGroups
