export const products = [
    {
        id: 1,
        name: "Lyocell wrap top",
        imgSrc: "/images/product/product-1.jpg",
        imgHover: "/images/product/product-1_2.jpg",
        badges: [{ type: "NEW", text: "HOT" }],
        sizes: ["S", "M", "L"],
        oldPrice: 99.99,
        price: 69.99,
        colors: [
            {
                name: "Brown",
                value: "bg-muted-brown",
                image: "/images/product/product-1.jpg",
                active: true,
            },
            {
                name: "Dark Blue",
                value: "bg-dark-blue-gray",
                image: "/images/product/product-1_3.jpg",
                active: false,
            },
            {
                name: "Gray",
                value: "bg-soft-gray",
                image: "/images/product/product-1_4.jpg",
                active: false,
            },
        ],
        inStock: true,
        brand: "Louis Vuitton",
    },
    {
        id: 2,
        name: "Buttons cotton top",
        imgSrc: "/images/product/product-2.jpg",
        imgHover: "/images/product/product-2_2.jpg",
        badges: [{ type: "NEW", text: "HOT" }],
        sizes: ["S", "M", "L"],
        oldPrice: 49.99,
        price: 29.99,
        colors: [
            {
                name: "Brown",
                value: "bg-muted-brown",
                image: "/images/product/product-2.jpg",
                active: true,
            },
            {
                name: "Beige",
                value: "bg-stone-beige",
                image: "/images/product/product-2_3.jpg",
                active: false,
            },
        ],
        inStock: true,
        brand: "Louis Vuitton",
    },
];

export const allProducts = [...products];

export type Product = (typeof allProducts)[number];