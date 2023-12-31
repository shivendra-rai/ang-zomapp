import { Component } from '@angular/core';
import { IMeal } from '../models/meal.model';

@Component({
  selector: 'app-quickSearch',
  templateUrl: './quickSearch.component.html',
  styleUrls: ['./quickSearch.component.css'],
})
export class QuickSearchComponent {
  img1: string = '../../assets/images/drinks.png';
  price: number = 221;
  openedOn = Date.now();
  mealData: IMeal[] = [
    {
      _id: '6187761a62a1816f88593a4a',
      mealtype_id: 2,
      mealtype: 'lunch',
      content: 'Start your day with exclusive breakfast options',
      meal_image: 'https://i.ibb.co/8rPxkWP/lunch.jpg',
    },
    {
      _id: '6187761a62a1816f88593a4b',
      mealtype_id: 3,
      mealtype: 'diNNer',
      content: 'Start your day with exclusive breakfast options',
      meal_image: 'https://i.ibb.co/XjzPqYv/dinner.jpg',
    },
    {
      _id: '6187761a62a1816f88593a4e',
      mealtype_id: 6,
      mealtype: 'nightLiFE',
      content: 'Start your day with exclusive breakfast options',
      meal_image: 'https://i.ibb.co/q1fC2jW/nightlife.jpg',
    },
    {
      _id: '6187761a62a1816f88593a4c',
      mealtype_id: 4,
      mealtype: 'Snacks',
      content: 'Start your day with exclusive breakfast options',
      meal_image: 'https://i.ibb.co/wchCHfb/snacks.jpg',
    },
    {
      _id: '6187761a62a1816f88593a4d',
      mealtype_id: 5,
      mealtype: 'Drinks',
      content: 'Start your day with exclusive breakfast options',
      meal_image: 'https://i.ibb.co/YR0S6fV/drinks.jpg',
    },
    {
      _id: '6187761a62a1816f88593a49',
      mealtype_id: 1,
      mealtype: 'Breakfast',
      content: 'Start your day with exclusive breakfast options',
      meal_image: 'https://i.ibb.co/FVhSTWK/breakfast.jpg',
    },
  ];
}
