import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';

const recipe = {
    "title": "Potato and Cheese Frittata",
    "href": "http:\/\/allrecipes.com\/Recipe\/Potato-and-Cheese-Frittata\/Detail.aspx",
    "ingredients": "cheddar cheese, eggs, olive oil, onions, potato, salt",
    "thumbnail": "http:\/\/img.recipepuppy.com\/2.jpg"
}

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(<RecipeItem recipe={recipe} />);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    })

    // Add more tests here
})
