const planGroups = [
  {
    title: "Monthly",
    isActive: true,
    items: [
      {
        title: "Basic Plan",
        description:
          "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: { value: "$9.99", label: "/month" },
      },
      {
        title: "Standard Plan",
        description:
          "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        price: { value: "$12.99", label: "/month" },
      },
      {
        title: "Premium Plan",
        description:
          "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        price: { value: "$14.99", label: "/month" },
      },
    ],
  },
  {
    title: "Yearly",
    isActive: false,
    items: [
      {
        title: "Basic Plan",
        description:
          "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: { value: "$119.99", label: "/year" },
      },
      {
        title: "Standard Plan",
        description:
          "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        price: { value: "$212.99", label: "/year" },
      },
      {
        title: "Premium Plan",
        description:
          "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        price: { value: "$143.99", label: "/year" },
      },
    ],
  },
]
export default planGroups
