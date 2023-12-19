export interface IMeal {
  _id: string;
  mealtype_id: number;
  mealtype: string;
  content: string;
  meal_image: string;
}

export interface ICity {
  _id: string;
  location_id: number;
  location_name: string;
  state_id: number;
  state: string;
  country_name: string;
}
