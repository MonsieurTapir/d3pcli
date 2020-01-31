import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private itemsUrl: string;
  constructor(private http: HttpClient) {
    this.itemsUrl = 'https://diabloplano.herokuapp.com/skills';
  }
  public findAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.itemsUrl);
  }
}
