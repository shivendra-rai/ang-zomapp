import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from '../models/location.model';

@Injectable()
export class HomeService {
  private baseUrl = 'http://3.17.216.66:4000/';
}
