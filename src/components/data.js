const menuItems = [
  {
    id: 1,
    category: "ramen",
    name: "Miso Abr",
    description:
      "Rich broth, miso paste, noodles, chicken roll, chili oil, soy sprouts, egg, white onion, porcini mushrooms, egg, nori",
    price: 2990,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d0eba1e-8a5b-11ee-9b90-dabcf8d783e2_c2596963_96ae_4759_9978_807a32bdb669.jpg?w=600",
    available: false,
  },
  {
    id: 2,
    category: "ramen",
    name: "Bisk Abr",
    description:
      "Ramen in a delicate creamy broth with shrimp, noodles, wakame, egg, green onions, nori",
    price: 3390,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b513672a-e418-11ed-a03c-864444777e63_3cd152ca_64f9_11ed_869b_c6f6567a1849_____.jpeg?w=600",
    available: true,
  },
  {
    id: 3,
    category: "ramen",
    name: "Tantanmen Abr",
    description:
      "Beef broth with nut butter, finely chopped beef fried with miso, shiitake mushrooms, egg",
    price: 3290,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d10bb02-8a5b-11ee-9b90-dabcf8d783e2_a1dd4b7e_619f_406b_8915_8f649e3184f1.jpg?w=600",
    available: true,
  },
  {
    id: 4,
    category: "ramen",
    name: "Seiyoo",
    description:
      "Classic chicken ramen, chicken broth with soy sauce, noodles, soy sprouts, egg, green onion, spinach, sesame and nori",
    price: 2690,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d11e9be-8a5b-11ee-9b90-dabcf8d783e2_4face18b_f399_4f43_bdd9_f7e6647b5a08.jpg?w=600",
    available: true,
  },
  {
    id: 5,
    category: "ramen",
    name: "Tom yam Abr",
    description:
      "Coconut tom yam broth, noodles, shrimp, squid, mussels, egg, wakame, green onion",
    price: 3590,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d12fffc-8a5b-11ee-9b90-dabcf8d783e2_789ee33a_7b7e_4afe_985d_b0c21a98f78c.jpg?w=600",
    available: true,
  },

  {
    id: 6,
    category: "ramen",
    name: "Vegeterian Ramen",
    description:
      "Japanese kombu seaweed broth with shiitake mushrooms and sesame-nut paste, bamboo, edamame, spinach",
    price: 3290,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b5198682-e418-11ed-a03c-864444777e63_4ff53c74_59d0_11ed_b402_229ddd8fbfc8_______________.jpeg?w=600",
    available: true,
  },

  {
    id: 7,
    category: "ramen",
    name: "Tory Paytan Ramen",
    description:
      "Rich chicken broth, noodles, chicken roll, miso paste, shiitake mushrooms, egg, soy sprouts, green onions, black garlic maso",
    price: 3290,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/00b9a436-1f20-11ee-89a7-66d532efa23c_f3685fd0_fe07_43c6_9f0c_6dc3f6f62a85.jpeg?w=600",
    available: true,
  },

  {
    id: 8,
    category: "appetizers",
    name: "Miso Caesar, crispy chicken",
    description: "Miso Caesar, crispy chicken",
    price: 2890,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d140dc0-8a5b-11ee-9b90-dabcf8d783e2_398ab30f_20bd_48b8_90ce_7dbba93a3961.jpg?w=600",
    available: true,
  },

  {
    id: 9,
    category: "appetizers",
    name: "Miso Caesar, crispy shrimp",
    description: "Miso Caesar, crispy shrimp",
    price: 2890,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d155176-8a5b-11ee-9b90-dabcf8d783e2_0d04b8db_4a57_4c37_93f2_ee44c71c5f32.jpg?w=600",
    available: true,
  },

  {
    id: 10,
    category: "ramen",
    name: "Kimchi Ramen",
    description:
      "Spicy kimchi-infused broth, beef, miso paste, shiitake mushrooms, egg, soy sprouts, green onions, black garlic miso",
    price: 3390,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d2710be-8a5b-11ee-9b90-dabcf8d783e2_2f1a33bb_fb2e_44ea_9cdb_7f7db877623d.jpg?w=600",
    available: true,
  },

  {
    id: 11,
    category: "noodles",
    name: "Soba, green vegetables, tofu",
    description:
      "Buckwheat noodles, green vegetables, tofu, fried nori in bulgogi sauce",
    price: 3390,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b53148b2-e418-11ed-a03c-864444777e63_260a5e44_c415_11ed_b394_ee95ca109931_imgl7128.jpeg?w=600",
    available: true,
  },

  {
    id: 12,
    category: "noodles",
    name: "Buckwheat noodles, shrimp, sweet chili",
    description: "Buckwheat noodles, shrimp, sweet chili",
    price: 3690,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d1e2ee0-8a5b-11ee-9b90-dabcf8d783e2_9425c5b9_6c80_4332_bbc3_1b023bd04e4a.jpg?w=600",
    available: true,
  },
  {
    id: 13,
    category: "noodles",
    name: "Buckwheat noodles, beef, tree mushrooms",
    description: "Buckwheat noodles, beef, tree mushrooms",
    price: 3390,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/511ceef8-ae11-11ee-9a52-e25956631e31_a0e5e547_55ca_4107_93b6_7704523530cf.29?w=600",
    available: false,
  },
  {
    id: 14,
    category: "rice",
    name: "Vegan rice",
    description:
      "Bell peppers (red and yellow), bok choy, red onion, tree mushrooms, soy marinated tofu (battered), nori flakes, peanuts, green onions, rice",
    price: 2990,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b536235a-e418-11ed-a03c-864444777e63_0c379102_d5b5_11ec_8a97_7e8042c5fe82_________.jpeg?w=600",
    available: true,
  },
  {
    id: 15,
    category: "rice",
    name: "Chicken teriyaki",
    description:
      "Chicken in teriyaki sauce, rice, broccoli, green onions, peanuts",
    price: 2990,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b53797c6-e418-11ed-a03c-864444777e63_32989bce_c426_11ed_9f80_328e0061cb5a_imgl7117.jpeg?w=600",
    available: true,
  },
  {
    id: 16,
    category: "rolls",
    name: "Hand roll with cucumber",
    description: "Rice, cucumber and sesame wrapped in nori",
    price: 2190,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b53c6698-e418-11ed-a03c-864444777e63_d3b346aa_c429_11ed_b4ea_464229062b8d_imgl7068.jpeg?w=600",
    available: true,
  },
  {
    id: 17,
    category: "rolls",
    name: "Onigirazu with chicken",
    description: "Rice sandwich with chicken and vegetables",
    price: 1790,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b54008de-e418-11ed-a03c-864444777e63_70ac6f6e_d5b4_11ec_bac1_9a2048f256a3_______.jpeg?w=600",
    available: true,
  },
  {
    id: 18,
    category: "rolls",
    name: "Onigirazu with tofu",
    description: "Rice sandwich with tofu and vegetables",
    price: 1790,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b54396e8-e418-11ed-a03c-864444777e63_689cf230_d5b4_11ec_9b9d_7e8042c5fe82_____.jpeg?w=600",
    available: true,
  },
  {
    id: 19,
    category: "rolls",
    name: "Philadelphia",
    description:
      "Smoked salmon, avocado, cream cheese rolled in seaweed and rice",
    price: 3590,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d216880-8a5b-11ee-9b90-dabcf8d783e2_dea448dc_8b9b_4a5e_9286_681002853cfe.jpg?w=600",
    available: true,
  },
  {
    id: 20,
    category: "rolls",
    name: "Dragon",
    description: "Eel wrapped in seaweed and rice, drizzled with eel sauce",
    price: 3590,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d22c6c6-8a5b-11ee-9b90-dabcf8d783e2_7fb928d4_49cd_409e_bac1_eae100b0a766.jpg?w=600",
    available: true,
  },
  {
    id: 21,
    category: "rolls",
    name: "California, crab",
    description:
      "Imitation crab, avocado, cucumber rolled in seaweed and rice, creamy mayo",
    price: 2990,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d24a84c-8a5b-11ee-9b90-dabcf8d783e2_30251b0c_e402_4137_99d9_c3c9d95c885b.jpg?w=600",
    available: false,
  },
  {
    id: 22,
    category: "toppings",
    name: "Rice",
    description: "Rice",
    price: 490,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b54716a6-e418-11ed-a03c-864444777e63_faee8ef8_d5bb_11ec_b8e4_f646df32fea9____.jpeg?w=600",
    available: true,
  },
  {
    id: 23,
    category: "toppings",
    name: "Noodles",
    description: "Noodles",
    price: 390,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b5482d02-e418-11ed-a03c-864444777e63_0441d280_d5bc_11ec_808c_e2cdd478fce1______.jpeg?w=600",
    available: true,
  },
  {
    id: 24,
    category: "toppings",
    name: "Egg",
    description: "Egg",
    price: 190,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b5497324-e418-11ed-a03c-864444777e63_161917f2_d5bc_11ec_a13a_f615395834bb_____.jpeg?w=600",
    available: true,
  },
  {
    id: 25,
    category: "toppings",
    name: "Steam bun",
    description: "Steam bun",
    price: 390,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b54a975e-e418-11ed-a03c-864444777e63_0c5ec626_d5bc_11ec_bb0e_268f1d43c59a_________.jpeg?w=600",
    available: false,
  },
  {
    id: 26,
    category: "toppings",
    name: "Chili paste",
    description: "Chili paste",
    price: 0,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b54bb062-e418-11ed-a03c-864444777e63_75115d6e_d5bc_11ec_9281_0679b8b3bc0b_________.jpeg?w=600",
    available: true,
  },
  {
    id: 27,
    category: "appetizers",
    name: "Shrimp chips",
    description: "Shrimp chips",
    price: 790,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b51fa666-e418-11ed-a03c-864444777e63_977f9026_f7a1_11ec_af0a_e6c9d17f2f59______.jpeg?w=600",
    available: true,
  },
  {
    id: 28,
    category: "appetizers",
    name: "Karaage",
    description: "Japanese snack, deep fried crispy chicken",
    price: 2590,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b5235d9c-e418-11ed-a03c-864444777e63_41ffa9aa_c411_11ed_ba5c_d655716b9dc4_imgl7061.jpeg?w=600",
    available: true,
  },
  {
    id: 29,
    category: "appetizers",
    name: "Shrimp bao",
    description:
      "Airy bun, tempura shrimp, cucumbers, green onions, cilantro, spicy sauce, sesame seeds",
    price: 2590,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d16612e-8a5b-11ee-9b90-dabcf8d783e2_c67b4b25_12d8_4b02_8321_707b7e59771c.jpg?w=600",
    available: true,
  },
  {
    id: 30,
    category: "appetizers",
    name: "Teokbokki carbonara, beef bacon, ajitama egg",
    description:
      "Teokbokki, beef bacon, cream, parmesan, egg, green onion, nori",
    price: 3490,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/00bd0900-1f20-11ee-89a7-66d532efa23c_403fad05_a53f_4177_a26e_982d1536b491.jpeg?w=600",
    available: true,
  },
  {
    id: 31,
    category: "appetizers",
    name: "Teokbokki, pepper sauce, ajitama egg",
    description: "Egg, tofu, green onion, hot sauce",
    price: 2990,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b526b5f0-e418-11ed-a03c-864444777e63_80db9c40_d2aa_11ed_a72d_260ba8b6824b_whatsapp_image_2023_04_04_at_11.35.03.jpeg?w=600",
    available: true,
  },
  {
    id: 32,
    category: "appetizers",
    name: "Edamame sweet chili",
    description: "Soybeans in sweet and spicy sauce",
    price: 1590,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b5286af8-e418-11ed-a03c-864444777e63_15b12f64_d5b4_11ec_9f5f_c6a9a3a3d767________________.jpeg?w=600",
    available: false,
  },
  {
    id: 33,
    category: "drinks",
    name: "Lemonade Sorrel",
    description: "Lemonade Sorrel",
    price: 990,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/b55630f0-e418-11ed-a03c-864444777e63_a464e89c_05a5_11ed_bab6_f2e83a4e5f95_______.jpeg?w=600",
    available: true,
  },
  {
    id: 34,
    category: "drinks",
    name: "Ice tea Sagan daylya",
    description: "Ice tea Sagan daylya",
    price: 890,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d28b1f8-8a5b-11ee-9b90-dabcf8d783e2_dec9ccb1_f079_494a_8516_facb9498c674.jpg?w=600",
    available: false,
  },
  {
    id: 35,
    category: "drinks",
    name: "Lemonade sea buckthorn mandarin",
    description: "Lemonade sea buckthorn mandarin",
    price: 890,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d2b5a0c-8a5b-11ee-9b90-dabcf8d783e2_c50fb962_60f8_461e_81b3_3e0fc378a428.jpg?w=600",
    available: true,
  },
  {
    id: 36,
    category: "drinks",
    name: "Lemonade apple lemongrass",
    description: "Lemonade apple lemongrass",
    price: 890,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/4d2a33ca-8a5b-11ee-9b90-dabcf8d783e2_fc784dc1_b168_4f68_9ad8_6a0d8071041e.jpg?w=600",
    available: true,
  },
  {
    id: 37,
    category: "drinks",
    name: "JinRo Original",
    description: "360 ml,	Alcohol 16.9%",
    price: 7590,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/cf623432-327c-11ee-9b24-ee0ef5e3a442_d7f8117b_5ba3_4f04_ad50_65976aef779c.png?w=1920",
    available: true,
  },
  {
    id: 38,
    category: "drinks",
    name: "Tsingtao",
    description: "500 ml, Alcohol 4.7%",
    price: 1890,
    image:
      "https://imageproxy.wolt.com/menu/menu-images/5d4d6df762c78bad7c9b07e6/cf5f9e02-327c-11ee-9b24-ee0ef5e3a442_3afb29d1_d724_4c57_ad6f_6462320a600f.png?w=600",
    available: true,
  },
  {
    id: 39,
    category: "March Special Free Offer",
    name: "Mochi",
    description: "Green tea fravored mochi 2 pieces",
    price: 0,
    image: "https://www.kroger.com/product/images/large/front/0007093499622",
    available: true,
  },
  // возможно нужно добавить раздел десертов
];

export default menuItems;
