import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../Models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  baseUrl: string = 'https://localhost:7229/api';

  constructor(private httpClient: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.baseUrl}/cards`);
  }
  getCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(`${this.baseUrl}/card/${id}`);
  }
  /*
  createCard(date:Body)
  {
    return this.httpClient.post<Card>(`${this.baseUrl}/card/create`, data);
  }
  */
}
