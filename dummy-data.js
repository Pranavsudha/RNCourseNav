import Category from "./models/category"
import Meal from "./models/meal"


export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Mexican', '#42f5a3'),
    new Category('c3', 'Japanese', '#8d42f5'),
    new Category('c4', 'Indian', '#f5d442'),
    new Category('c5', 'French', '#428df5'),
    new Category('c6', 'Chinese', '#f5428d'),
    new Category('c7', 'Mediteranean', '#42f5a3'),
    new Category('c8', 'Thai', '#8d42f5')
    
]

export const MEALS =[
    new Meal('m1', ['c1','c2'], 'Spagetti With Tomato Sauce','affordable','simple','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHu74767D3iTXUW_TPqdggK43UCLedzzIsAxjIWinxluAITHP8GvjtL6qw6DAbT9fVXI&usqp=CAU',20,['2 tablespoons olive oil','1 onion, chopped','2 cloves garlic, minced','1 carrot, peeled and diced'],['Heat the olive oil in a large pot over medium heat','Add the chopped onion and cook until translucent.','Add the minced garlic and cook for an additional 1-2 minutes until fragrant','Add the diced carrot and celery, and cook for another 5 minutes until the vegetables are softened.']),
    new Meal('m2', ['c2', 'c4'], 'Garlic Pasta', 'moderate', 'medium','https://pinchandswirl.com/wp-content/uploads/2020/04/Lemon-Garlic-Pasta-sq.jpg',40,['2 tablespoons olive oil','1 onion, chopped','2 cloves garlic, minced','1 carrot, peeled and diced'],['Heat the olive oil in a large pot over medium heat','Add the chopped onion and cook until translucent.','Add the minced garlic and cook for an additional 1-2 minutes until fragrant','Add the diced carrot and celery, and cook for another 5 minutes until the vegetables are softened.']),
    new Meal('m3', ['c5', 'c2'], 'Pesto Pasta', 'expensive', 'complex','https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Basil-Pesto-Thumbnail.jpg',50,['2 tablespoons olive oil','1 onion, chopped','2 cloves garlic, minced','1 carrot, peeled and diced'],['Heat the olive oil in a large pot over medium heat','Add the chopped onion and cook until translucent.','Add the minced garlic and cook for an additional 1-2 minutes until fragrant','Add the diced carrot and celery, and cook for another 5 minutes until the vegetables are softened.']),
    new Meal('m4', ['c2', 'c8'], 'Spaghetti Bolognese', 'affordable', 'medium','https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg',60,['2 tablespoons olive oil','1 onion, chopped','2 cloves garlic, minced','1 carrot, peeled and diced'],['Heat the olive oil in a large pot over medium heat','Add the chopped onion and cook until translucent.','Add the minced garlic and cook for an additional 1-2 minutes until fragrant','Add the diced carrot and celery, and cook for another 5 minutes until the vegetables are softened.']),
    new Meal('m5', ['c9', 'c2'], 'Caprese Salad', 'affordable', 'simple','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg',55,['2 tablespoons olive oil','1 onion, chopped','2 cloves garlic, minced','1 carrot, peeled and diced'],['Heat the olive oil in a large pot over medium heat','Add the chopped onion and cook until translucent.','Add the minced garlic and cook for an additional 1-2 minutes until fragrant','Add the diced carrot and celery, and cook for another 5 minutes until the vegetables are softened.']),
]

