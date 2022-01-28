const foodItems = [
    {
        title: "McAloo Tikki Burger®",
        subTitle: 'The one that never goes out of flavour.',
        about: 'A golden fried vegetarian patty prepared with peas, potato and infused with aromatic spices. Clubbed with sliced tomatoes, shredded red onion, and tangy tomato mayonnaise. Served in a warm toasted bun.',
        size: '146 gm',
        contains: 'Gluten, Milk and/or Milk products, Soybean derivatives',
        calories: '334 kCal',
        protein: '7gm',
        fats: '12gm',
        carbs: '50gm',
        ingredients: 'Regular bun crown, Tom-Mayo sauce, Sliced tomatoes, Shredded onion, Aloo tikki patty, Regular bun heel',
        imgUrl: './tikki_burger.png'
    },
    {
        title: 'Dosa Masala Burger®',
        subTitle: 'A new taste of India.',
        about: 'Turmeric-spiced mashed potato filling topped with fresh peas. Grilled and placed inside a soft whole wheat bun with a spicy molagapodi chutney mayo.',
        size: '138 gm',
        contains: 'Gluten, Milk and/or Milk products, Soybean derivatives',
        calories: '307 kCal',
        protein: '5.7gm',
        fats: '12.2gm',
        carbs: '43.5gm',
        ingredients: 'Whole wheat bun, Rasam mayo, Dosa masala aloo patty',
        imgUrl: './dosa_masal_burger.png'
    },
    {
        title: 'McVeggie®',
        subTitle: 'Pure taste. Pure veg.',
        about: 'A delectable patty made of green goodness, potatoes, peas, carrots and a selection of Indian spices. Topped with crispy lettuce, mayonnaise, and packed into sesame toasted buns.',
        size: '169 gm',
        contains: 'Gluten, Milk and/or Milk products, Soybean derivatives',
        calories: '386 kCal',
        protein: '9gm',
        fats: '14gm',
        carbs: '56gm',
        ingredients: 'Quarter bun crown, Veg mayonnaise, Shredded lettuce, Vegetable patty, Quarter bun heel',
        imgUrl: './mc_veggie.png'
    }
]

export default foodItems

const proto = {
    title: '',
    subTitle: '',
    about: '',
    size: '',
    contains: '',
    calories: '',
    protein: '',
    fats: '',
    carbs: '',
    ingredients: '',
    imgUrl: ''
}