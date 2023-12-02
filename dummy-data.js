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
    new Meal('m1', ['c1','c2'], 'Spagetti With Tomato Sauce','affordable','simple','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.giallozafferano.com%2Fimages%2F228-22832%2Fspaghetti-with-tomato-sauce_1200x800.jpg&tbnid=BW5YALzhkQxxgM&vet=12ahUKEwiB6Y-K3u-CAxWZcmwGHX9KB8YQMygAegQIARBt..i&imgrefurl=https%3A%2F%2Fwww.giallozafferano.com%2Frecipes%2Fspaghetti-with-tomato-sauce.html&docid=PlATZW9zGVpaHM&w=1200&h=800&q=spaghetti%20with%20tomato%20sauce&client=firefox-b-d&ved=2ahUKEwiB6Y-K3u-CAxWZcmwGHX9KB8YQMygAegQIARBt'),
    new Meal('m2', ['c2', 'c4'], 'Garlic Pasta', 'moderate', 'medium','https://www.google.com/imgres?imgurl=https%3A%2F%2Fpinchandswirl.com%2Fwp-content%2Fuploads%2F2020%2F04%2FLemon-Garlic-Pasta-sq.jpg&tbnid=51b_4gEJ7pz2IM&vet=12ahUKEwi0vLKb3u-CAxV_cGwGHSXsBfIQMygAegQIARBt..i&imgrefurl=https%3A%2F%2Fpinchandswirl.com%2Flemon-garlic-pasta%2F&docid=alRBmVfK24ymiM&w=1200&h=1200&q=garlic%20pasta&client=firefox-b-d&ved=2ahUKEwi0vLKb3u-CAxV_cGwGHSXsBfIQMygAegQIARBt'),
    new Meal('m3', ['c5', 'c2'], 'Pesto Pasta', 'expensive', 'complex','https://www.google.com/imgres?imgurl=https%3A%2F%2Fflavorthemoments.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fchicken-pesto-pasta-1.jpg&tbnid=csXwrv3k3s6gQM&vet=12ahUKEwj69IKr3u-CAxXRcWwGHfXwA-UQMygAegQIARBt..i&imgrefurl=https%3A%2F%2Fflavorthemoments.com%2Fone-pot-chicken-pesto-pasta%2F&docid=Rwji4VtdfuiBXM&w=1360&h=2040&q=Pesto%20Pasta&client=firefox-b-d&ved=2ahUKEwj69IKr3u-CAxXRcWwGHfXwA-UQMygAegQIARBt'),
    new Meal('m4', ['c2', 'c8'], 'Spaghetti Bolognese', 'affordable', 'medium','https://www.google.com/imgres?imgurl=https%3A%2F%2Frecipetineats.com%2Fwp-content%2Fuploads%2F2018%2F07%2FSpaghetti-Bolognese.jpg&tbnid=xn5PNaFTrT-EJM&vet=12ahUKEwiJw4iz3u-CAxVkT2wGHWJiDucQMygAegQIARBt..i&imgrefurl=https%3A%2F%2Fwww.recipetineats.com%2Fspaghetti-bolognese%2F&docid=aGZsxK-Y-KpSkM&w=900&h=1260&q=Spaghetti%20Bolognese&client=firefox-b-d&ved=2ahUKEwiJw4iz3u-CAxVkT2wGHWJiDucQMygAegQIARBt'),
    new Meal('m5', ['c9', 'c2'], 'Caprese Salad', 'affordable', 'simple','https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.downshiftology.com%2Fwp-content%2Fuploads%2F2019%2F07%2FCaprese-Salad-main-1.jpg&tbnid=795RGDLngwIOIM&vet=12ahUKEwia5Km73u-CAxXCbmwGHUYHBVUQMygAegQIARBt..i&imgrefurl=https%3A%2F%2Fdownshiftology.com%2Frecipes%2Fcaprese-salad%2F&docid=rG7XjiC8PXxnIM&w=1600&h=1067&q=Caprese%20Salad&client=firefox-b-d&ved=2ahUKEwia5Km73u-CAxXCbmwGHUYHBVUQMygAegQIARBt'),
]

