export interface Vendor {
    id: number
    title: string
    description: string,
    category: number,
    tags: string,
    latitude: number,
    longitude: number
}

export const vendors: Vendor[] = [
    {
        id: 1,
        title: "Electronics Store 1",
        description: "A store selling a variety of electronic gadgets.",
        category: 1,
        tags: "electronics, gadgets, tech",
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        id: 2,
        title: "Electronics Store 2",
        description: "Your one-stop-shop for cutting-edge technology.",
        category: 1,
        tags: "electronics, tech, innovation",
        latitude: 34.0522,
        longitude: -118.2437
    },
    {
        id: 3,
        title: "Electronics Supercenter",
        description: "Explore the latest electronic devices and accessories.",
        category: 1,
        tags: "electronics, gadgets, tech",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        id: 4,
        title: "Electronics Depot",
        description: "Quality electronics for your everyday needs.",
        category: 1,
        tags: "electronics, gadgets, tech",
        latitude: 41.8781,
        longitude: -87.6298
    },
    {
        id: 5,
        title: "Gizmo Gallery",
        description: "Discover unique and innovative gadgets.",
        category: 1,
        tags: "electronics, gadgets, tech",
        latitude: 33.7490,
        longitude: -84.3880
    },
    {
        id: 6,
        title: "Fashion Boutique 1",
        description: "Chic and trendy clothing for all occasions.",
        category: 2,
        tags: "clothing, fashion, style",
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        id: 7,
        title: "Urban Threads",
        description: "Express your style with our urban-inspired clothing.",
        category: 2,
        tags: "clothing, fashion, streetwear",
        latitude: 34.0522,
        longitude: -118.2437
    },
    {
        id: 8,
        title: "Casual Couture",
        description: "Casual and comfortable clothing for everyday wear.",
        category: 2,
        tags: "clothing, casual, comfortable",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        id: 9,
        title: "Elegant Ensembles",
        description: "Elegance meets modern fashion in our curated collection.",
        category: 2,
        tags: "clothing, fashion, elegance",
        latitude: 41.8781,
        longitude: -87.6298
    },
    {
        id: 10,
        title: "Sportswear Haven",
        description: "Gear up with our high-performance sportswear.",
        category: 2,
        tags: "clothing, sportswear, activewear",
        latitude: 33.7490,
        longitude: -84.3880
    },
    {
        id: 11,
        title: "Kitchenware Haven",
        description: "Everything you need for your kitchen.",
        category: 3,
        tags: "kitchen, home, cooking",
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        id: 12,
        title: "Culinary Corner",
        description: "Premium kitchen tools for the passionate chef.",
        category: 3,
        tags: "kitchen, cooking, culinary",
        latitude: 34.0522,
        longitude: -118.2437
    },
    {
        id: 13,
        title: "Home Essentials Emporium",
        description: "Discover essential items for your home.",
        category: 3,
        tags: "home, kitchen, essentials",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        id: 14,
        title: "Gourmet Gadgets Galore",
        description: "Elevate your cooking experience with gourmet gadgets.",
        category: 3,
        tags: "kitchen, cooking, gourmet",
        latitude: 41.8781,
        longitude: -87.6298
    },
    {
        id: 15,
        title: "Book Emporium",
        description: "A bookstore with a vast collection of books.",
        category: 4,
        tags: "books, literature, reading",
        latitude: 33.7490,
        longitude: -84.3880
    },
    {
        id: 16,
        title: "Novel Nook",
        description: "Immerse yourself in a world of novels and stories.",
        category: 4,
        tags: "books, novels, reading",
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        id: 17,
        title: "Literary Lounge",
        description: "Explore the best works of literature in a cozy setting.",
        category: 4,
        tags: "books, literature, reading",
        latitude: 34.0522,
        longitude: -118.2437
    },
    {
        id: 18,
        title: "Poetry Paradise",
        description: "Discover the beauty of poetry in our curated collection.",
        category: 4,
        tags: "books, poetry, reading",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        id: 19,
        title: "Sci-Fi Sanctuary",
        description: "Journey into the realms of science fiction literature.",
        category: 4,
        tags: "books, sci-fi, reading",
        latitude: 41.8781,
        longitude: -87.6298
    },
    {
        id: 20,
        title: "Outdoor Adventure Gear",
        description: "Equip yourself for outdoor adventures.",
        category: 5,
        tags: "sports, outdoors, adventure",
        latitude: 33.7490,
        longitude: -84.3880
    },
    {
        id: 21,
        title: "Beauty Bazaar",
        description: "Explore a wide range of beauty and skincare products.",
        category: 6,
        tags: "beauty, skincare, cosmetics",
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        id: 22,
        title: "Toy Kingdom",
        description: "A wonderland of toys for kids of all ages.",
        category: 7,
        tags: "toys, games, play",
        latitude: 34.0522,
        longitude: -118.2437
    },
    {
        id: 23,
        title: "Auto Accessories Hub",
        description: "Enhance your ride with our premium auto accessories.",
        category: 8,
        tags: "automotive, accessories, car",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        id: 24,
        title: "Jewelry Junction",
        description: "Adorn yourself with exquisite jewelry pieces.",
        category: 9,
        tags: "jewelry, accessories, fashion",
        latitude: 41.8781,
        longitude: -87.6298
    },
    {
        id: 25,
        title: "Home Improvement Hub",
        description: "Upgrade your living space with our home improvement essentials.",
        category: 10,
        tags: "home improvement, tools, DIY",
        latitude: 33.7490,
        longitude: -84.3880
    },
];

