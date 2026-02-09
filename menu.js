const menus = {
    alpha: {
        name: "Alpha",
        categories: [
             {
                "category": "Rice & Noodles",
                "items": [
                    {"name": "Chicken Rice", "price_full": 120, "price_half": 80},
                    {"name": "Chicken Noodles", "price_full": 120, "price_half": 80},
                    {"name": "Veg Rice", "price": 100},
                    {"name": "Veg Noodles", "price": 100},
                    {"name": "Gobi Rice", "price": 100},
                    {"name": "Gobi Noodles", "price": 100},
                    {"name": "Mushroom Rice", "price": 100},
                    {"name": "Mushroom Noodles", "price": 100},
                    {"name": "Paneer Rice", "price": 110},
                    {"name": "Paneer Noodles", "price": 110},
                    {"name": "Egg Rice", "price": 100},
                    {"name": "Egg Noodles", "price": 100}
                ]
                },
                {
                "category": "Combo Plate",
                "items": [
                    {"name": "Veg Rice + Gobi Manchurian", "price": 140},
                    {"name": "Veg Noodles + Gobi Manchurian", "price": 160},
                    {"name": "Egg Rice + Chilli Chicken", "price": 160},
                    {"name": "Chicken Rice + Chilli Chicken", "price": 160},
                    {"name": "Chicken Rice + Soya/Other Chicken + Pakoda", "price": 160}
                ]
                },
                {
                "category": "Non-Veg Snacks",
                "items": [
                    {"name": "Chilli Chicken", "price": 130},
                    {"name": "Chicken Manchurian", "price": 120},
                    {"name": "Chicken Pakoda", "price": 110},
                    {"name": "Chicken Lollipop", "price": 120},
                    {"name": "Soya Lollipop", "price": 120},
                    {"name": "Chicken 65", "price": 130}
                ]
                },
                {
                "category": "Veg Snacks",
                "items": [
                    {"name": "Gobi Manchurian", "price": 130},
                    {"name": "Chilli Gobi", "price": 130},
                    {"name": "Mushroom Manchurian", "price": 130},
                    {"name": "Paneer Manchurian", "price": 130}
                ]
                },
                {
                "category": "Shawarma & Rolls",
                "items": [
                    {"name": "Regular Roll", "price": 90},
                    {"name": "Special Roll", "price": 120},
                    {"name": "Special Plate", "price": 150},
                    {"name": "BBQ Roll", "price": 150},
                    {"name": "Chilli Garlic Paneer Roll", "price": 150},
                    {"name": "Peri Peri Roll", "price": 150},
                    {"name": "Hot & Spicy Roll", "price": 150},
                    {"name": "Tandoori Roll", "price": 150},
                    {"name": "Schezwon Roll", "price": 150},
                    {"name": "Chicken Cheese Roll", "price": 150}
                ]
                },
                {
                "category": "Biryani",
                "items": [
                    {"name": "Biryani", "price": 130},
                    {"name": "Biryani + Pakoda", "price": 150}
                ]
                },
                {
                "category": "Chicken Gravy Items",
                "items": [
                    {"name": "Garlic Chicken", "price": 140},
                    {"name": "Ginger Chicken", "price": 150},
                    {"name": "Chicken (Moghlai/Moglai style)", "price": 150},
                    {"name": "Andhra Chilli Chicken", "price": 150}
                ]
                },
                {
                "category": "Breads",
                "items": [
                    {"name": "Chicken Chilli Parotta", "price": 100}
                ]
            }
        ]
    },

    georgia: {
        name: "Georgia",
        categories: [
            {
                "category": "Cold Beverages",
                "items": [
                    {"name": "Ice Lemon Tea", "price": 30},
                    {"name": "Cold Coffee", "price": 30},
                    {"name": "Cold Chocolate", "price": 40},
                    {"name": "Lemon Juice", "price": 30},
                    {"name": "Orange Juice", "price": 30},
                    {"name": "Mango Juice", "price": 30},
                    {"name": "Rose Milk", "price": 30}
                ]
                },
                {
                "category": "Sandwiches & Snacks",
                "items": [
                    {"name": "Veg Cheese Sandwich", "price": 50},
                    {"name": "Egg Cheese Sandwich", "price": 75},
                    {"name": "Chicken Cheese Sandwich", "price": 75},
                    {"name": "Paneer Cheese Sandwich", "price": 75},
                    {"name": "Corn Cheese Sandwich", "price": 75},
                    {"name": "Chilli Cheese Toast", "price": 75},
                    {"name": "Club Sandwich", "price": 70},
                    {"name": "Bread Omelette", "price": 75},
                    {"name": "Omelette (2 Egg)", "price": 40},
                    {"name": "Boiled Egg (2 Egg)", "price": 40},
                    {"name": "Veg Burger", "price": 30},
                    {"name": "Veg Roll", "price": 70},
                    {"name": "Veg Maggi", "price": 70},
                    {"name": "Veg Cheese Maggi", "price": 30},
                    {"name": "Veg Samosa", "price": 20}
                ]
                },
                {
                "category": "Hot Beverages",
                "items": [
                    {"name": "Hot Coffee", "price": 15},
                    {"name": "Tea", "price": 15},
                    {"name": "Dip Tea", "price": 15},
                    {"name": "Lemon Tea", "price": 15},
                    {"name": "Green Tea", "price": 15},
                    {"name": "Horlicks", "price": 15},
                    {"name": "Boost", "price": 15},
                    {"name": "Hot Chocolate", "price": 15},
                    {"name": "Hot Badam", "price": 15},
                    {"name": "Sukku Coffee", "price": 15},
                    {"name": "Ragi Malt", "price": 15}
                ]
            }
        ]
    },
    sri:{
        name: "Sri",
        categories: [
            {
            "category": "Snacks",
            "items": [
                {"name": "Samosa"},
                {"name": "Bread Pakoda"},
                {"name": "Kachori"},
                {"name": "Veg Patti"},
                {"name": "Aloo Bonda"}
            ]
            },
            {
            "category": "Chaat",
            "items": [
                {"name": "Pav Bhaji"},
                {"name": "Pani Puri"},
                {"name": "Bhel Puri"},
                {"name": "Sev Puri"},
                {"name": "Masala Puri"},
                {"name": "Mix Chaat"},
                {"name": "Papadi Chaat"},
                {"name": "Dosa Chaat"},
                {"name": "Kachori Chaat"},
                {"name": "Vada Pav"},
                {"name": "Samosa Pav"},
                {"name": "Dahi Puri"},
                {"name": "Dahi Papdi"},
                {"name": "Dahi Samosa"},
                {"name": "Dahi Kachori"},
                {"name": "Chena Samosa"}
            ]
            },
            {
            "category": "Beverages",
            "items": [
                {"name": "Masala Tea"},
                {"name": "Butter Milk"},
                {"name": "Sweet Lassi"},
                {"name": "Lemon Mint"}
            ]
            },
            {
            "category": "Chaat (Special)",
            "items": [
                {"name": "Chena Masala"},
                {"name": "Chena Papdi"},
                {"name": "Chena Kachori"},
                {"name": "Aloo Papdi Chaat"}
            ]
            },
            {
            "category": "Lunch",
            "items": [
                {"name": "Combo Meal"},
                {"name": "Chilli Parotta"},
                {"name": "Roti Sabji"},
                {"name": "Sabji"}
            ]
            },
            {
            "category": "Live Counter",
            "items": [
                {"name": "Channa Batura (Live)"}
            ]
            },
            {
            "category": "Starters",
            "items": [
                {"name": "Paneer Roll"},
                {"name": "Veg Roll"}
            ]
            },
            {
            "category": "Pasta & Continental",
            "pricing": {
                "half": 110,
                "full": 200
            },
            "items": [
                {"name": "Penne Ducale"},
                {"name": "Penne Neapolitana"},
                {"name": "Spaghetti Arrabbiata White"},
                {"name": "Arabian Flakes"},
                {"name": "Wooden Noodles"},
                {"name": "Italian Pizza"},
                {"name": "Macaroni Red Sauce"},
                {"name": "Macaroni White Sauce"}
            ]
            }
        ]
    },
    hotandcool:{
        name: "Hot & Cool",
        categories: [
            {
            "category": "Hot Beverages",
            "items": [
                {"name": "Tea", "price": 15},
                {"name": "Coffee", "price": 15},
                {"name": "Black Tea / Black Coffee", "price": 15},
                {"name": "Lemon Tea", "price": 15},
                {"name": "Badam", "price": 30},
                {"name": "Boost", "price": 30},
                {"name": "Horlicks", "price": 30}
            ]
            },
            {
            "category": "Maggi",
            "items": [
                {"name": "Maggi", "price_half": 50, "price_full": 70},
                {"name": "Cheese Maggi", "price_half": 55, "price_full": 90},
                {"name": "Egg Maggi", "price_half": 55, "price_full": 90}
            ]
            },
            {
            "category": "Egg Items",
            "items": [
                {"name": "Omelette", "price": 30},
                {"name": "Bread Omelette", "price": 40},
                {"name": "Cheese Bread Omelette", "price": 50}
            ]
            },
            {
            "category": "Snacks & Meals",
            "items": [
                {"name": "Mushroom Fry", "price": 50},
                {"name": "Sweet Corn"},
                {"name": "Sambar Rice", "price": 60},
                {"name": "Curd Rice", "price": 60},
                {"name": "Water Bottle", "price": 20}
            ]
            },
            {
            "category": "Sandwich",
            "items": [
                {"name": "Veg Sandwich", "price": 80},
                {"name": "Corn Sandwich", "price": 80}
            ]
            },
            {
            "category": "Juice & Cold Drinks",
            "items": [
                {"name": "Apple Juice", "price": 70},
                {"name": "Pomegranate Juice", "price": 70},
                {"name": "Lemon Juice", "price": 30},
                {"name": "Lemon Mint", "price": 40},
                {"name": "Nannari Sharbat", "price": 30},
                {"name": "Butter Milk", "price": 30},
                {"name": "Musk Melon Juice", "price": 50},
                {"name": "Water Melon Juice", "price": 30},
                {"name": "Pineapple Juice", "price": 50},
                {"name": "Orange Juice", "price": 60},
                {"name": "Rose Milk Badam", "price": 50},
                {"name": "Banana Milk Shake", "price": 40},
                {"name": "Chikku Juice", "price": 70},
                {"name": "Dragon Juice", "price": 100}
            ]
            }
        ]
    },
    carewell:{
        name: "Care Well Cafe",
        categories: [
            {
            "category": "Lunch Menu",
            "items": [
                {"name": "Sambar Rice", "price": 70},
                {"name": "Pepper Rice", "price": 70},
                {"name": "Biryani Rice", "price": 60},
                {"name": "Curd Rice", "price": 60},
                {"name": "Tomato Biryani", "price": 100},
                {"name": "Chicken Biryani (Basmati Rice)", "price": 120},
                {"name": "65 Biryani", "price": 150},
                {"name": "Kuska", "price": 90},
                {"name": "Chapathi (2 pcs) with Veg/Non-Veg Gravy", "price": 30}
            ]
            },
            {
            "category": "Egg Items",
            "items": [
                {"name": "Boiled Egg", "price": 15},
                {"name": "Half Boil", "price": 20},
                {"name": "Full Boil", "price": 20},
                {"name": "Omelette", "price": 40},
                {"name": "Egg Bhurji", "price": 40}
            ]
            },
            {
            "category": "Snacks / Bakery",
            "items": [
                {"name": "Brownie Cake", "price": 50}
            ]
            },
            {
            "category": "Hot Beverages",
            "items": [
                {"name": "Tea", "price": 15},
                {"name": "Coffee", "price": 25},
                {"name": "Horlicks", "price": 35},
                {"name": "Boost", "price": 30},
                {"name": "N/S Tea", "price": 25},
                {"name": "N/S Coffee", "price": 25}
            ]
            },
            {
            "category": "Cold Drinks / Juices",
            "items": [
                {"name": "Butter Milk", "price": 30},
                {"name": "Lassi", "price": 45}
            ]
            }
        ]
    },
    "gazebo1": {
        name: "Gazebo-1",
        categories: [
            {
            "category": "Drinks",
            "items": [
                {"name": "Tea", "price": 15},
                {"name": "Coffee", "price": 15},
                {"name": "Filter Coffee", "price": 25},
                {"name": "Badam / Ragi Malt", "price": 30},
                {"name": "Nannari Sarbath", "price": 30},
                {"name": "Buttermilk", "price": 30},
                {"name": "Rose Milk", "price": 60}
            ]
            },
            {
            "category": "Juice",
            "items": [
                {"name": "Sugarcane Juice", "price": 40},
                {"name": "Vazhaithandu Juice", "price": 50},
                {"name": "Carrot Juice", "price": 50},
                {"name": "Beetroot Juice", "price": 50}
            ]
            },
            {
            "category": "Milkshakes",
            "items": [
                {"name": "Pineapple Milkshake", "price": 70},
                {"name": "Banana Milkshake", "price": 70},
                {"name": "Strawberry Milkshake", "price": 80},
                {"name": "Pomegranate Milkshake", "price": 80},
                {"name": "Chikku Milkshake", "price": 80},
                {"name": "Mango Milkshake", "price": 80}
            ]
            },
            {
            "category": "Dosa",
            "items": [
                {"name": "Idli (2 Nos)", "price": 25},
                {"name": "Set Dosa", "price": 50},
                {"name": "Adai Dosa (4 Dhalls)", "price": 60},
                {"name": "Curry Leaf Dosa", "price": 60},
                {"name": "Drumstick Leaf Dosa", "price": 60},
                {"name": "Ragi Dosa", "price": 60},
                {"name": "Kambu (Rye) Dosa", "price": 60},
                {"name": "Dhall Podi Dosa (Sesame)", "price": 70},
                {"name": "Egg Dosa", "price": 70}
            ]
            },
            {
            "category": "Lunch",
            "items": [
                {"name": "Sambar Rice", "price": 60},
                {"name": "Curd Rice", "price": 60}
            ]
            },
            {
            "category": "Soup",
            "items": [
                {"name": "Vegetable Soup", "price": 50}
            ]
            },
            {
            "category": "Noodles",
            "items": [
                {"name": "Maggie Flavour Masala Noodles (Millets)", "price": 70}
            ]
            },
            {
            "category": "Roll",
            "items": [
                {"name": "Millet Roll (2 pcs)", "price": 40}
            ]
            },
            {
            "category": "Sandwich",
            "items": [
                {"name": "Millets & Sprouts Sandwich", "price": 70}
            ]
            },
            {
            "category": "Wrap",
            "items": [
                {"name": "Millets & Sprouts Wrap", "price": 80}
            ]
            },
            {
            "category": "Shawarma",
            "items": [
                {"name": "Regular Chicken Shawarma", "price": 90},
                {"name": "Special Whole Chicken Shawarma", "price": 130}
            ]
            },
            {
            "category": "Chaat",
            "items": [
                {"name": "Masala Poori", "price": 60},
                {"name": "Dahi Bhel Poori", "price": 60},
                {"name": "Pani Poori", "price": 50},
                {"name": "Sev Poori", "price": 60},
                {"name": "Channa Samosa", "price": 60},
                {"name": "Dahi Samosa", "price": 50},
                {"name": "Cutlet Channa", "price": 50},
                {"name": "Aloo Chaat", "price": 50},
                {"name": "Mushroom Fry Masala", "price": 50},
                {"name": "Vada Pav", "price": 50},
                {"name": "Pav Bhaji", "price": 80}
            ]
            },
            {
            "category": "Snacks",
            "items": [
                {"name": "Sundal (Channa)", "price": 30},
                {"name": "Vegetable Cutlet (2 pcs)", "price": 30},
                {"name": "Veg Samosa (2 pcs)", "price": 30},
                {"name": "Kuzhi Paniyaram (4 pcs)", "price": 30},
                {"name": "Keerai Vadai (2 pcs)", "price": 30},
                {"name": "Veg Bajji (3 pcs)", "price": 30},
                {"name": "Spring Potato", "price": 50},
                {"name": "Potato Pops", "price": 50}
            ]
            },
            {
            "category": "Sweet Corn & Popcorn",
            "items": [
                {"name": "Sweet Corn", "price": 50},
                {"name": "Pop Corn", "price": 50}
            ]
            },
            {
            "category": "Cut Fruits",
            "items": [
                {"name": "Watermelon / Pineapple / Papaya", "price": 40},
                {"name": "Mixed Cut Fruits", "price": 50},
                {"name": "Ice Cream + Fruits", "price": 60}
            ]
            },
            {
            "category": "Traditional Snacks",
            "items": [
                {"name": "Murukku (250 gms)", "price": 80},
                {"name": "Mixture (250 gms)", "price": 80},
                {"name": "Chips (250 gms)", "price": 80},
                {"name": "Milk Gova (Palkova)", "price": "MRP"},
                {"name": "Peanut (Groundnut Barfi)", "price": "MRP"},
                {"name": "Ellu (Sesame) Barfi", "price": "MRP"},
                {"name": "Macaroons", "price": "MRP"}
            ]
            }
        ]
    },

   "gazebo2": {
        name: "Gazebo-2",
        categories: [
            {
            "category": "Sandwiches",
            "items": [
                {"name": "Veg Cheese", "price": 50},
                {"name": "Chilli Cheese", "price": 50},
                {"name": "Paneer Cheese", "price": 60},
                {"name": "Aloo Tikki", "price": 60},
                {"name": "Veg Patty", "price": 70},
                {"name": "Egg Mayo Cheese", "price": 50},
                {"name": "Chicken Cheese", "price": 70},
                {"name": "Chicken Patty", "price": 80},
                {"name": "Chicken Sausage", "price": 80}
            ]
            },
            {
            "category": "Wraps",
            "items": [
                {"name": "Paneer Wrap", "price": 80},
                {"name": "Paneer 65 Wrap", "price": 100},
                {"name": "Veg Patty Wrap", "price": 80},
                {"name": "Shredded Chicken Wrap", "price": 90},
                {"name": "Chicken 65 Wrap", "price": 100},
                {"name": "Egg Wrap", "price": 70},
                {"name": "Sausage Wrap", "price": 90}
            ]
            },
            {
            "category": "Snacks",
            "items": [
                {"name": "Veg Puff", "price": 20},
                {"name": "Samosa", "price": 20},
                {"name": "Egg Puff", "price": 25},
                {"name": "Chicken Puff", "price": 35},
                {"name": "Veg Roll", "price": 40},
                {"name": "French Fries", "price": 60},
                {"name": "Cheese Corn Nuggets", "price": 60},
                {"name": "Chicken Nuggets", "price": 70}
            ]
            },
            {
            "category": "Momos",
            "items": [
                {"name": "Veg Momos", "price": 60},
                {"name": "Paneer Momos", "price": 70},
                {"name": "Paneer Tikka Momos", "price": 80},
                {"name": "Chicken Momos", "price": 80}
            ]
            },
            {
            "category": "Desserts",
            "items": [
                {"name": "Chocolate Truffle", "price": 50},
                {"name": "Chocolate Swiss Roll", "price": 60},
                {"name": "Chocolate Lava", "price": 60},
                {"name": "Chocolate Mousse", "price": 50}
            ]
            },
            {
            "category": "Cakes & Ice Cream",
            "items": [
                {"name": "Chocolate Brownie", "price": 60},
                {"name": "D.B.C", "price": 60},
                {"name": "Banana Bread", "price": 40},
                {"name": "Chocolate Tart", "price": 50},
                {"name": "Chocolate Donut", "price": 50},
                {"name": "Brownie with Ice Cream", "price": 90},
                {"name": "Lava with Ice Cream", "price": 90},
                {"name": "Truffle with Ice Cream", "price": 80},
                {"name": "Swiss Roll with Ice Cream", "price": 90},
                {"name": "Ice Cream Scoop", "price": 40}
            ]
            },
            {
            "category": "Milk Shakes",
            "items": [
                {"name": "Vanilla", "price": 50},
                {"name": "Banana", "price": 40},
                {"name": "Butterscotch", "price": 60},
                {"name": "Chocolate", "price": 60},
                {"name": "Oreo", "price": 60},
                {"name": "Strawberry", "price": 60},
                {"name": "Cold Coffee", "price": 60},
                {"name": "Cold Coffee with Ice Cream", "price": 90},
                {"name": "Rose Milk", "price": 40},
                {"name": "Cold Boost", "price": 50}
            ]
            },
            {
            "category": "Subs",
            "items": [
                {"name": "Aloo Tikki Sub", "price": 80},
                {"name": "Paneer Sub", "price": 90},
                {"name": "Chicken Sub", "price": 90}
            ]
            },
            {
            "category": "Fresh Juices",
            "items": [
                {"name": "Lime", "price": 30},
                {"name": "Lime Soda", "price": 40},
                {"name": "Watermelon", "price": 40},
                {"name": "Pineapple", "price": 50},
                {"name": "Orange", "price": 50},
                {"name": "Sweet Lime", "price": 50},
                {"name": "Pomegranate", "price": 60},
                {"name": "Grape", "price": 50},
                {"name": "Musk Melon", "price": 50}
            ]
            },
            {
            "category": "Burger",
            "items": [
                {"name": "Veg Burger", "price": 80},
                {"name": "Chicken Burger", "price": 100}
            ]
            },
            {
            "category": "Pizza",
            "items": [
                {"name": "Veg Pizza", "price": 80},
                {"name": "Chicken Pizza", "price": 100}
            ]
            },
            {
            "category": "Pasta",
            "items": [
                {"name": "Veg Pasta", "price": 90},
                {"name": "Chicken Pasta", "price": 100}
            ]
            },
            {
            "category": "Noodles",
            "items": [
                {"name": "Veg Noodles", "price": 80},
                {"name": "Egg Noodles", "price": 90},
                {"name": "Chicken Noodles", "price": 100}
            ]
            },
            {
            "category": "Omelette",
            "items": [
                {"name": "Omelette", "price": 30},
                {"name": "Bread Omelette", "price": 50},
                {"name": "Chicken Omelette", "price": 60},
                {"name": "Boiled Egg (1 pc)", "price": 10}
            ]
            },
            {
            "category": "Mocktails",
            "items": [
                {"name": "Lime Mint Cooler", "price": 40},
                {"name": "Green Apple", "price": 50},
                {"name": "Blueberry", "price": 50},
                {"name": "Black Current", "price": 50},
                {"name": "Lime & Grape", "price": 40}
            ]
            },
            {
            "category": "Hot Beverages",
            "items": [
                {"name": "Tea", "price": 15},
                {"name": "Lemon Tea", "price": 15},
                {"name": "Black Tea", "price": 15},
                {"name": "Coffee", "price": 15},
                {"name": "Black Coffee", "price": 15},
                {"name": "Hot Chocolate", "price": 30},
                {"name": "Hot Boost", "price": 30}
            ]
            }
        ]
    },
    "dakshin flavours": {
        name: "Dakshin Flavours",
        categories: [
           {
            "category": "Snacks & Eggs",
            "items": [
                {"name": "Egg Bajji"},
                {"name": "Onion Pakoda"},
                {"name": "Potato Bajji"},
                {"name": "Omelet"},
                {"name": "Boiled Eggs"}
            ]
            },
            {
            "category": "Parotta & Chapathi",
            "items": [
                {"name": "Parotta Paneer"},
                {"name": "Chapathi Chicken"},
                {"name": "Chapathi Paneer"},
                {"name": "Paneer Laaba"},
                {"name": "Chicken Roll"},
                {"name": "Fish Finger"},
                {"name": "Omelet"}
            ]
            },
            {
            "category": "Main Course & Chinese",
            "items": [
                {"name": "Chicken Kothu Parotta"},
                {"name": "Veg Kothu Parotta"},
                {"name": "Fried Rice"},
                {"name": "Noodles"},
                {"name": "Chilly Chicken"},
                {"name": "Chilly Paneer"},
                {"name": "Chilly Gobi"},
                {"name": "Chicken Soup"},
                {"name": "Veg Soup"},
                {"name": "Chicken Laaba"}
            ]
            },
            {
            "category": "Chinese Combo – Non Veg",
            "items": [
                {"name": "Chicken Rice + Chilly Chicken", "price": 180},
                {"name": "Chicken Rice + Chicken 65", "price": 180}
            ]
            },
            {
            "category": "Chinese Combo – Veg",
            "items": [
                {"name": "Veg Rice + Chilly Paneer", "price": 180},
                {"name": "Veg Rice + Chilly Gobi", "price": 170},
                {"name": "Paneer Rice + Chilly Gobi", "price": 180},
                {"name": "Paneer Rice + Chilly Paneer", "price": 180},
                {"name": "Gobi Rice + Chilly Gobi", "price": 170},
                {"name": "Mushroom Rice + Chilly Mushroom", "price": 180},
                {"name": "Mushroom Rice + Chilly Paneer", "price": 180}
            ]
            }
        ]
    },
    "babahouse": {
        name: "Boba House",
        categories: [
           {
            "category": "Chaat",
            "items": [
                {"name": "Masala Puri", "price": 60},
                {"name": "Bhel Puri", "price": 60},
                {"name": "Chana Masala", "price": 70},
                {"name": "Dahi Puri", "price": 60},
                {"name": "Papdi Chaat", "price": 70},
                {"name": "Samosa with Chana", "price": 70},
                {"name": "Masala Corn", "price": 60}
            ]
            },
            {
            "category": "Bun In Classic",
            "price_note": "All items Rs.80",
            "items": [
                {"name": "Bun Butter Jam", "price": 80},
                {"name": "Strawberry White Chocolate Bun", "price": 80},
                {"name": "Lotus Biscoff Bun", "price": 80},
                {"name": "Malai Choco Bun", "price": 80},
                {"name": "Caramel Filling Bun", "price": 80}
            ]
            },
            {
            "category": "Milk Tea with Boba",
            "price_note": "All items Rs.149",
            "items": [
                {"name": "Hazelnut Milk Tea with Coffee Boba", "price": 149},
                {"name": "Taro Milk Tea with Taiwan Boba", "price": 149},
                {"name": "Litchi Blossom with Litchi Boba", "price": 149},
                {"name": "Tiramisu Milk Tea with Coffee Boba", "price": 149},
                {"name": "Blueberry with Blueberry Boba", "price": 149}
            ]
            },
            {
            "category": "Scoops of Ice Cream",
            "price_note": "All scoops Rs.60",
            "items": [
                {"name": "Vanilla", "price": 60},
                {"name": "Strawberry", "price": 60},
                {"name": "Black Currant", "price": 60},
                {"name": "Coffee", "price": 60},
                {"name": "Chocolate", "price": 60},
                {"name": "Butterscotch", "price": 60},
                {"name": "Mango", "price": 60}
            ]
            },
            {
            "category": "Waffles",
            "price_note": "All waffles Rs.99",
            "items": [
                {"name": "Malai Choco Waffles", "price": 99},
                {"name": "Strawberry Waffles", "price": 99},
                {"name": "Death By Chocolate Waffles", "price": 99},
                {"name": "Butterscotch Waffle", "price": 99},
                {"name": "Caramel Filling Waffle", "price": 99}
            ]
            },
            {
            "category": "Dessert",
            "items": [
                {"name": "Nat Trap Falooda"},
                {"name": "Brownie with Ice Cream"},
                {"name": "Fruits Falooda"},
                {"name": "Mango Mousse"},
                {"name": "Keto Cambridge Panna Cotta"},
                {"name": "Strawberry Cheesecake"},
                {"name": "Chocolate and Nuts Overload"}
            ]
            },
            {
            "category": "Chilli Set",
            "price_note": "All items Rs.70",
            "items": [
                {"name": "Iced Tea", "price": 70},
                {"name": "Blueberry Iced Tea", "price": 70},
                {"name": "Litchi Iced Tea", "price": 70}
            ]
            },
            {
            "category": "Milkshake",
            "price_note": "All milkshakes Rs.99",
            "items": [
                {"name": "Nutty Vanilla Milkshake", "price": 99},
                {"name": "Butterscotch Milkshake", "price": 99},
                {"name": "Irish Coffee Milkshake", "price": 99},
                {"name": "Belgian Chocolate Milkshake", "price": 99},
                {"name": "Nifty Strawberry Milkshake", "price": 99},
                {"name": "Cold Coffee Milkshake", "price": 99}
            ]
            }
        ]
    },
    "hunger": {
        name: "Hunger",
        categories: [
           {
                "category": "Small Plate",
                "items": [
                    {"name": "Classic French Fries", "price": 110},
                    {"name": "Peri Peri Crispy Fries", "price": 130},
                    {"name": "Cheesy Chicken Loaded Fries", "price": 150}
                ]
                },
                {
                "category": "Wraps",
                "items": [
                    {"name": "Indian Paneer Wrap", "price": 110},
                    {"name": "Classic Paneer Wrap", "price": 120},
                    {"name": "Crunchy Chicken Wrap", "price": 130},
                    {"name": "Tandoori Chicken Wrap", "price": 150}
                ]
                },
                {
                "category": "Pasta",
                "items": [
                    {"name": "Mac and Crispy", "price": 190},
                    {"name": "Penne Creamy Dreamy", "price": 190},
                    {"name": "Curried Fusilli Pasta", "price": 190}
                ]
                },
                {
                "category": "Dessert",
                "items": [
                    {"name": "No Bake Mousse", "price": 120},
                    {"name": "Classic Tiramisu", "price": 120},
                    {"name": "Marshmallow Cheese Chocolate", "price": 120},
                    {"name": "Last Time Ever Saw My Waste", "price": 120}
                ]
                },
                {
                "category": "Hunger Boom Burger & Wraps",
                "items": [
                    {"name": "Tiny Buns Bite", "price": 190},
                    {"name": "Grilled Tiny Buns Bite", "price": 190},
                    {"name": "A Bite of Crispy Burger", "price": 210},
                    {"name": "Spicy Cheese Punch", "price": 190},
                    {"name": "OG Korean Fried Chicken Burger", "price": 210}
                ]
                },
                {
                "category": "Burgers",
                "items": [
                    {"name": "The Oregon Forager (Veg)", "price": 190},
                    {"name": "Classic Veggie Burger", "price": 190}
                ]
                },
                {
                "category": "Pizza",
                "items": [
                    {"name": "Triple Cheese Pizza", "price": 190},
                    {"name": "Margherita Pizza", "price": 190},
                    {"name": "Garden Queen Pizza", "price": 190}
                ]
                },
                {
                "category": "Beverages & OG Shakes",
                "items": [
                    {"name": "Ice Tea", "price": 70},
                    {"name": "Blue Sea", "price": 70},
                    {"name": "Virgin Mojito", "price": 70},
                    {"name": "Peanut Butter Shake", "price": 120},
                    {"name": "Biscoff Milk Shake", "price": 120},
                    {"name": "Mixed Berry Shake", "price": 120},
                    {"name": "Ice Milo", "price": 120}
                ]
                },
                {
                "category": "Add Ons",
                "items": [
                    {"name": "Chicken", "price": 80},
                    {"name": "Cheese", "price": 50},
                    {"name": "Vegetables", "price": 50}
                ]
                }

        ]
    },
    "ab1-second floor": {
        name: "AB1 Second Floor",
        categories: [
           {
            "category": "Sandwiches",
            "items": [
                {"name": "Paneer Cheese", "price": 60},
                {"name": "Chilli Cheese Toast", "price": 50},
                {"name": "Veg Cheese", "price": 50},
                {"name": "Aloo Tikki", "price": 70},
                {"name": "Chicken Cheese", "price": 70},
                {"name": "Chicken Patty", "price": 80},
                {"name": "Chicken Sausage", "price": 80},
                {"name": "Egg, Mayo & Cheese", "price": 50}
            ]
            },
            {
            "category": "Wraps",
            "items": [
                {"name": "Paneer Wrap", "price": 80},
                {"name": "Chicken Patty Wrap", "price": 90},
                {"name": "Aloo Tikki Wrap", "price": 80},
                {"name": "Shredded Chicken Wrap", "price": 90}
            ]
            },
            {
            "category": "Burger & Fries",
            "items": [
                {"name": "Veg Burger", "price": 80},
                {"name": "Chicken Burger", "price": 100},
                {"name": "French Fries", "price": 60},
                {"name": "Cheese Corn Nuggets", "price": 60},
                {"name": "Chicken Nuggets", "price": 70},
                {"name": "Veg Roll", "price": 40},
                {"name": "Veg Puff", "price": 20},
                {"name": "Egg Puff", "price": 25},
                {"name": "Samosa", "price": 20}
            ]
            },
            {
            "category": "Subs",
            "items": [
                {"name": "Aloo Tikki Sub", "price": 80},
                {"name": "Paneer Sub", "price": 90},
                {"name": "Chicken Sub", "price": 90},
                {"name": "Extra Cheese", "price": 10}
            ]
            },
            {
            "category": "Soda / Coolers",
            "items": [
                {"name": "Green Apple", "price": 50},
                {"name": "Black Current", "price": 50},
                {"name": "Blueberry", "price": 50},
                {"name": "Lime Mint Cooler", "price": 40},
                {"name": "Lime Soda", "price": 40}
            ]
            },
            {
            "category": "Desserts",
            "items": [
                {"name": "Chocolate Truffle", "price": 50},
                {"name": "Chocolate Lava", "price": 60},
                {"name": "Brownie", "price": 60},
                {"name": "Brownie with Ice Cream", "price": 90},
                {"name": "Chocolate Mousse", "price": 50},
                {"name": "Chocolate Roll", "price": 60},
                {"name": "D.B.C", "price": 60},
                {"name": "Ice Cream", "price": 40},
                {"name": "Banana Bread", "price": 40},
                {"name": "Muffin", "price": 30},
                {"name": "Donut", "price": 50}
            ]
            },
            {
            "category": "Milkshakes",
            "items": [
                {"name": "Vanilla", "price": 50},
                {"name": "Butterscotch", "price": 60},
                {"name": "Chocolate", "price": 60},
                {"name": "Mango", "price": 60},
                {"name": "Oreo Cookie", "price": 60},
                {"name": "Strawberry", "price": 60},
                {"name": "Cold Coffee", "price": 60},
                {"name": "Rose Milk", "price": 40},
                {"name": "Cold Boost", "price": 40}
            ]
            },
            {
            "category": "Fresh Juices",
            "items": [
                {"name": "Watermelon", "price": 40},
                {"name": "Lime", "price": 30},
                {"name": "Pineapple", "price": 50},
                {"name": "Sweet Lime", "price": 50},
                {"name": "Orange", "price": 50},
                {"name": "Pomegranate", "price": 60},
                {"name": "Musk Melon", "price": 50},
                {"name": "Grape", "price": 50}
            ]
            },
            {
            "category": "Hot Beverages",
            "items": [
                {"name": "Tea", "price": 15},
                {"name": "Coffee", "price": 15},
                {"name": "Boost", "price": 30},
                {"name": "Hot Chocolate", "price": 30}
            ]
            }
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const canteenKey = (params.get("shop") || "alpha").toLowerCase();

const title = document.getElementById("canteenTitle");
const container = document.getElementById("menuContainer");

if (title && container) {
if (!menus[canteenKey]) {
    title.innerText = "Menu Not Found";
    container.innerHTML = "<p>Invalid canteen.</p>";
} else {
    const canteen = menus[canteenKey];
    title.innerText = canteen.name + " – Menu";

    canteen.categories.forEach(cat => {
        const div = document.createElement("div");
        div.className = "menu-category";

        let html = `<h3>${cat.category}</h3><ul class="menu-list">`;

        cat.items.forEach(item => {
            let price = "—";

            if (item.price_full && item.price_half) {
                price = `₹${item.price_full} / ₹${item.price_half}`;
            } else if (item.price) {
                price = `₹${item.price}`;
            }

            html += `
                <li class="menu-item">
                    <span>${item.name}</span>
                    <span class="menu-price ${price === "—" ? "na" : ""}">
                        ${price}
                    </span>
                </li>
            `;
        });

        html += "</ul>";
        div.innerHTML = html;
        container.appendChild(div);
    });
}
}
const canteenMenus = [
  {
    canteen: "Alpha",
    slots: {
      breakfast: {
        time: [7, 10.5],
        items: ["Veg Noodles", "Veg Rice", "Egg Noodles"]
      },
      lunch: {
        time: [12, 15],
        items: ["Chicken Rice", "Chicken Noodles", "Paneer Rice"]
      },
      snacks: {
        time: [15.5, 18],
        items: ["Chicken Pakoda", "Gobi Manchurian", "Paneer Manchurian"]
      },
      dinner: {
        time: [19, 22],
        items: ["Biryani", "Biryani + Pakoda", "Chicken Chilli Parotta"]
      }
    }
  },
  {
    canteen: "Georgia",
    slots: {
      breakfast: {
        time: [7.5, 11],
        items: ["Hot Coffee", "Tea", "Veg Cheese Sandwich"]
      },
      lunch: {
        time: [12, 15.5],
        items: ["Veg Burger", "Veg Roll", "Veg Maggi"]
      },
      snacks: {
        time: [16, 18.5],
        items: ["Samosa", "Chilli Cheese Toast", "Cold Coffee"]
      }
    }
  },
  {
    canteen: "Care Well Cafe",
    slots: {
      breakfast: {
        time: [7, 10],
        items: ["Tea", "Coffee", "Horlicks"]
      },
      lunch: {
        time: [11.5, 15],
        items: ["Chicken Biryani (Basmati Rice)", "Tomato Biryani", "Sambar Rice"]
      },
      snacks: {
        time: [16, 18.5],
        items: ["Brownie Cake", "Butter Milk", "Lassi"]
      },
      dinner: {
        time: [19, 21],
        items: ["Chapathi (2 pcs) with Veg/Non-Veg Gravy", "Kuska"]
      }
    }
  },
  {
    canteen: "Sri",
    slots: {
      breakfast: {
        time: [8, 11],
        items: ["Masala Tea", "Butter Milk", "Veg Patti"]
      },
      lunch: {
        time: [12, 15],
        items: ["Combo Meal", "Chilli Parotta", "Roti Sabji"]
      },
      snacks: {
        time: [16, 18],
        items: ["Samosa", "Kachori", "Bhel Puri"]
      },
      dinner: {
        time: [19, 22],
        items: ["Pav Bhaji", "Masala Puri", "Dosa Chaat"]
      }
    }
  },
  {
    canteen: "Hot & Cool",
    slots: {
      breakfast: {
        time: [6, 10],
        items: ["Tea", "Coffee", "Veg Sandwich"]
      },
      lunch: {
        time: [12, 15],
        items: ["Sambar Rice", "Curd Rice", "Mushroom Fry"]
      },
      snacks: {
        time: [16, 18],
        items: ["Sweet Corn", "Banana Milk Shake", "Lemon Mint"]
      },
      dinner: {
        time: [19, 23],
        items: ["Maggi", "Cheese Maggi", "Egg Maggi"]
      }
    }
  },
  {
    canteen: "Gazebo-1",
    slots: {
      breakfast: {
        time: [8, 11],
        items: ["Idli (2 Nos)", "Set Dosa", "Filter Coffee"]
      },
      lunch: {
        time: [12, 15],
        items: ["Sambar Rice", "Curd Rice", "Vegetable Soup"]
      },
      snacks: {
        time: [16, 19],
        items: ["Masala Poori", "Pani Poori", "Millet Roll (2 pcs)"]
      },
      dinner: {
        time: [19, 22],
        items: ["Regular Chicken Shawarma", "Maggie Flavour Masala Noodles (Millets)", "Millets & Sprouts Wrap"]
      }
    }
  }
];
