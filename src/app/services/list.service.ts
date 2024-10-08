import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiURL = "http://localhost:3000/list";
  constructor(private http: HttpClient) { }

  getList() : Observable<Item[]>{
    return this.http.get<Item[]>(this.apiURL);
  }

  deleteItem(item:Item) : Observable<Item>{
    return this.http.delete<Item>(`${this.apiURL}/${item.id}`)
  }
  updateItem(item:Item) : Observable<Item>{
    return this.http.put<Item>(`${this.apiURL}/${item.id}`, item)
  }
}
