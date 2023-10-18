"use client"
import React, { useState } from 'react';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories: { [key: string]: { name: string, price: string | { small: string, large: string } }[] } = {
        
        "Combination Platters (w. Pork Fried Rice & Egg Roll)": [
            { name: "Chicken Chow Mein", price: "$9.85" },
            { name: "Shrimp Chow Mein", price: "$9.85" },
            { name: "Boneless Spare Ribs", price: "$9.85" },
            { name: "Roast Pork Egg Foo Young", price: "$9.85" },
            { name: "Pepper Steak with Onions", price: "$9.85" },
            { name: "Roast Pork with Chinese Vegetables", price: "$9.85" },
            { name: "BBQ Spare Ribs", price: "$9.85" },
            { name: "Shrimp with Lobster Sauce", price: "$9.85" },
            { name: "Roast Pork Lo Mein", price: "$9.85" },
            { name: "Chicken Lo Mein", price: "$9.85" },
            { name: "Moo Goo Gai Pan", price: "$9.85" },
            { name: "Sweet & Sour Pork", price: "$9.85" },
            { name: "Sweet & Sour Chicken", price: "$9.85" },
            { name: "Chicken with Broccoli", price: "$9.85" },
            { name: "Pork with Broccoli", price: "$9.85" },
            { name: "Beef with Broccoli", price: "$9.85" },
            { name: "Chicken with Black Bean Sauce", price: "$9.85" },
            { name: "Chicken with Cashew Nuts", price: "$9.85" },
            { name: "Beef with Cashew Nuts", price: "$9.85" },
            { name: "Shrimp with Cashew Nuts", price: "$9.85" },
            { name: "Shrimp with Broccoli", price: "$9.85" },
            { name: "General Tso Chicken", price: "$9.85" },
            { name: "Sesame Chicken", price: "$9.85" },
            { name: "Chicken with Garlic Sauce", price: "$9.85" },
            { name: "Pork with Garlic Sauce", price: "$9.85" },
            { name: "Shrimp with Garlic Sauce", price: "$9.85" },
            { name: "Beef with Garlic Sauce", price: "$9.85" },
            { name: "Shrimp with Chinese Vegetables", price: "$9.85" },
            { name: "Beef with Chinese Vegetables", price: "$9.85" },
            { name: "Hunan Chicken", price: "$9.85" },
            { name: "Hunan Pork", price: "$9.85" },
            { name: "Hunan Shrimp", price: "$9.85" },
            { name: "Hunan Beef", price: "$9.85" },
            { name: "Kung Po Chicken", price: "$9.85" },
            { name: "Kung Po Beef", price: "$9.85" },
            { name: "Shrimp Lo Mein", price: "$9.85" },
            { name: "Beef Lo Mein", price: "$9.85" },
            { name: "Orange Chicken", price: "$9.85" },
            { name: "Bourbon Chicken", price: "$9.85" },
            { name: "Honey Chicken", price: "$9.85" },
            { name: "Szechuan Shrimp", price: "$9.85" },
            { name: "Szechuan Beef", price: "$9.85" },
            { name: "Szechuan Chicken", price: "$9.85" },
            { name: "Szechuan Pork", price: "$9.85" },
            { name: "Kung Po Shrimp", price: "$9.85" }
        ],
        
        "Appetizers": [
            { name: "Pork Egg Roll (1)", price: "$1.70" },
            { name: "Vegetable Egg Roll (1)", price: "$1.70" },
            { name: "Shrimp Egg Roll (1)", price: "$1.90" },
            { name: "Fried Donuts (10)", price: "$5.215" },
            { name: "Fantail Shrimp (10)", price: "$6.95" },
            { name: "Fried Wonton (8)", price: "$5.25" },
            { name: "Dumping (Fried or Steamed) (8)", price: "$7.50" },
            { name: "Szechuan Wonton (8)", price: "$5.45" },
            { name: "Beef Teriyaki (3)", price: "$5.95" },
            { name: "Chicken Teriyaki (3)", price: "$5.95" },
            { name: "Boneless Spare Ribs", price: { small: "$7.25", large: "$11.75" } },
            { name: "BBQ Spare Ribs", price: { small: "$7.55", large: "$13.35" } },
            { name: "French Fries", price: "$2.95" },
            { name: "Pu Pu Platter (for 2)", price: "$11.50" },
            { name: "Krab Rangoons (8)", price: "$7.25" },
        ],

        "Soup": [
            { name: "Wonton Soup", price: { small: "$3.15", large: "$4.50" } },
            { name: "Egg Drop Soup", price: { small: "$3.15", large: "$4.50" } },
            { name: "Chicken Corn Soup", price: { small: "$3.45", large: "$4.75" } },
            { name: "Wonton Egg Drop Soup", price: { small: "$3.45", large: "$4.75" } },
            { name: "Chicken Noodle Soup", price: { small: "$3.15", large: "$4.50" } },
            { name: "Chicken Rice Soup", price: { small: "$3.15", large: "$4.50" } },
            { name: "Hot & Sour Soup", price: { small: "$3.95", large: "$5.50" } },
            { name: "House Special Soup", price: "$8.25" },
            { name: "Vegetable Soup", price: "$5.50" },
        ],

        "Fried Rice": [
            { name: "Vegetable Fried Rice", price: { small: "$6.25", large: "$8.95" } },
            { name: "Pork Fried Rice", price: { small: "$6.35", large: "$8.95" } },
            { name: "Chicken Fried Rice", price: { small: "$6.35", large: "$8.95" } },
            { name: "Shrimp Fried Rice", price: { small: "$6.75", large: "$9.25" } },
            { name: "Beef Fried Rice", price: { small: "$6.75", large: "$9.25" } },
            { name: "House Special Fried Rice", price: { small: "$6.95", large: "$9.50" } },
            { name: "Young Chow Fried Rice", price: { small: "$6.95", large: "$10.25" } }
        ],
    
        "Lo Mein (Soft Egg Noodles)": [
            { name: "Vegetable Lo Mein", price: { small: "$6.45", large: "$8.95" } },
            { name: "Roast Pork Lo Mein", price: { small: "$6.45", large: "$8.95" } },
            { name: "Chicken Lo Mein", price: { small: "$6.45", large: "$8.95" } },
            { name: "Shrimp Lo Mein", price: { small: "$6.85", large: "$9.25" } },
            { name: "Beef Lo Mein", price: { small: "$6.85", large: "$9.25" } },
            { name: "House Special Lo Mein", price: { small: "$7.25", large: "$9.75" } },
            { name: "Seafood Lo Mein", price: { small: "$7.25", large: "$9.75" } }
        ],
    
        "Chow Mein (w. White Rice & Fried Noodle)": [
            { name: "Vegetable Chow Mein", price: { small: "$6.45", large: "$8.95" } },
            { name: "Pork Chow Mein", price: { small: "$6.45", large: "$8.95" } },
            { name: "Chicken Chow Mein", price: { small: "$6.45", large: "$8.95" } },
            { name: "Shrimp Chow Mein", price: { small: "$6.85", large: "$9.50" } },
            { name: "Beef Chow Mein", price: { small: "$6.85", large: "$9.50" } },
            { name: "House Special Chow Mein", price: { small: "$7.25", large: "$9.75" } }
        ],
    
        "Chop Suey (w. White Rice)": [
            { name: "Vegetable Chop Suey", price: { small: "$6.45", large: "$8.95" } },
            { name: "Roast Pork Chop Suey", price: { small: "$6.45", large: "$8.95" } },
            { name: "Chicken Chop Suey", price: { small: "$6.45", large: "$8.95" } },
            { name: "Shrimp Chop Suey", price: { small: "$6.85", large: "$9.50" } },
            { name: "Beef Chop Suey", price: { small: "$6.85", large: "$9.50" } },
            { name: "House Special Chop Suey", price: { small: "$7.25", large: "$9.75" } }
        ],
    
        "Sweet and Sour (w. White Rice)": [
            { name: "Sweet & Sour Pork", price: { small: "$7.50", large: "$10.95" } },
            { name: "Sweet & Sour Chicken", price: { small: "$7.50", large: "$10.95" } },
            { name: "Sweet & Sour Shrimp", price: { small: "$7.75", large: "$11.95" } }
        ],
    
        "Egg Foo Young (w. White Rice)": [
            { name: "Vegetable Egg Foo Young", price: "$9.25" },
            { name: "Pork Egg Foo Young", price: "$9.25" },
            { name: "Chicken Egg Foo Young", price: "$9.25" },
            { name: "Shrimp Egg Foo Young", price: "$9.50" },
            { name: "Beef Egg Foo Young", price: "$9.50" },
            { name: "House Special Egg Foo Young", price: "$9.75" }
        ],
    
        "Mei Fun": [
            { name: "Roast Pork Mei Fun", price: "$9.95" },
            { name: "Chicken Mei Fun", price: "$9.95" },
            { name: "Shrimp Mei Fun", price: "$9.95" },
            { name: "Singapore Mei Fun", price: "$10.25" },
            { name: "House Special Mei Fun", price: "$10.25" }
        ],
    
        "Pork": [
            { name: "Pork with Broccoli", price: { small: "$7.50", large: "$10.95" } },
            { name: "Pork with Chinese Vegetables", price: { small: "$7.50", large: "$10.95" } },
            { name: "Pork with Mushroom", price: { small: "$7.50", large: "$10.95" } },
            { name: "Pork with Snow Peas", price: { small: "$7.50", large: "$10.95" } },
            { name: "Pork with Black Bean Sauce", price: { small: "$7.50", large: "$10.95" } },
            { name: "Pork Hunan Style", price: { small: "$7.50", large: "$10.95" } },
            { name: "Pork with Garlic Sauce", price: { small: "$7.50", large: "$10.95" } }
        ],

        "Chicken": [
            { name: "Moo Goo Gai Pan", price: { small: "$7.50", large: "$10.95" } },
            { name: "Curry Chicken with Onion", price: { small: "$7.50", large: "$10.95" } },
            { name: "Chicken with Chinese Vegetable", price: { small: "$7.50", large: "$10.95" } },
            { name: "Chicken with Broccoli", price: { small: "$7.50", large: "$10.95" } },
            { name: "Chicken with Snow Peas", price: { small: "$7.50", large: "$10.95" } },
            { name: "Chicken with Black Bean Sauce", price: { small: "$7.50", large: "$10.95" } },
            { name: "Chicken with Mushroom", price: { small: "$7.50", large: "$10.95" } },
            { name: "Chicken with Cashew Nuts", price: { small: "$7.50", large: "$10.95" } },
            { name: "Kung Pao Chicken", price: { small: "$7.50", large: "$10.95" } },
            { name: "Chicken with Garlic Sauce", price: { small: "$7.50", large: "$10.95" } },
            { name: "Szechuan Chicken", price: { small: "$7.50", large: "$10.95" } },
            { name: "Hunan Chicken", price: { small: "$7.50", large: "$10.95" } },
            { name: "Pepper Chicken with Onion", price: { small: "$7.50", large: "$10.95" } }
        ],
    
        "Vegetable/Tofu": [
            { name: "Sauteed Broccoli", price: { small: "$6.95", large: "$9.35" } },
            { name: "Broccoli with Garlic Sauce", price: { small: "$6.95", large: "$9.35" } },
            { name: "Mixed Vegetable", price: { small: "$6.95", large: "$9.35" } },
            { name: "Mixed Vegetable with Garlic Sauce", price: { small: "$6.95", large: "$9.35" } },
            { name: "Mixed Vegetable with Tofu", price: { small: "$6.95", large: "$9.35" } },
            { name: "Szechuan Tofu", price: { small: "$6.95", large: "$9.35" } },
            { name: "General Tso Tofu", price: { small: "$6.95", large: "$9.35" } },
            { name: "Curry Tofu", price: { small: "$6.95", large: "$9.35" } }
        ],
    
        "Beef": [
            { name: "Beef with Broccoli", price: { small: "$7.75", large: "$11.95" } },
            { name: "Pepper Steak with Onion", price: { small: "$7.75", large: "$11.95" } },
            { name: "Beef with Mushroom", price: { small: "$7.75", large: "$11.95" } },
            { name: "Beef with Snow Peas", price: { small: "$7.75", large: "$11.95" } },
            { name: "Beef with Mixed Vegetables", price: { small: "$7.75", large: "$11.95" } },
            { name: "Beef with Garlic Sauce", price: { small: "$7.75", large: "$11.95" } },
            { name: "Hunan Beef", price: { small: "$7.75", large: "$11.95" } },
            { name: "Szechuan Beef", price: { small: "$7.75", large: "$11.95" } }
        ],

        "Seafood": [
            { name: "Shrimp with Lobster Sauce", price: { small: "$7.75", large: "$11.95" } },
            { name: "Shrimp with Broccoli", price: { small: "$7.75", large: "$11.95" } },
            { name: "Shrimp with Snow Peas", price: { small: "$7.75", large: "$11.95" } },
            { name: "Curry Shrimp with Onions", price: { small: "$7.75", large: "$11.95" } },
            { name: "Shrimp with Black Bean Sauce", price: { small: "$7.75", large: "$11.95" } },
            { name: "Shrimp with Cashew Nuts", price: { small: "$7.75", large: "$11.95" } },
            { name: "Kung Po Shrimp", price: { small: "$7.75", large: "$11.95" } },
            { name: "Shrimp with Garlic Sauce", price: { small: "$7.75", large: "$11.95" } },
            { name: "Hunan Shrimp", price: { small: "$7.75", large: "$11.95" } },
            { name: "Szechuan Shrimp", price: { small: "$7.75", large: "$11.95" } },
            { name: "Shrimp with Mixed Vegetables", price: { small: "$7.75", large: "$11.95" } }
        ]

    };

    return (
        <div className="p-4 lg:px-20 xl:px-40">
            {Object.keys(categories).map(category => (
                <div key={category} className="my-4">
                    <div className="flex">
                        <button 
                            onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                            className="text-red-500 px-4 py-2 bg-red-500 text-white rounded uppercase flex-grow"
                        >
                            <span className="flex justify-start">{category}</span>
                        </button>
                    </div>
                    {activeCategory === category && (
                        <div className="mt-4 bg-white rounded p-4">
                            <ul className="list-decimal pl-5">
                              {categories[category].map((dish) => (
                                  <li key={dish.name} className="flex justify-between py-2 border-b border-gray-300">
                                      <span className="text-red-500">{dish.name}</span>
                                      <span>
                                          {typeof dish.price === "string" ? dish.price : `Small: ${dish.price.small}, Large: ${dish.price.large}`}
                                      </span>
                                  </li>
                              ))}
                          </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MenuPage;
