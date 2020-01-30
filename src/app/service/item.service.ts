import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Item } from '../model/item';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
  private itemsUrl: string;
  constructor(private http: HttpClient) {
    this.itemsUrl = 'https://diabloplano.herokuapp.com/items';
  }
  public findAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
}
