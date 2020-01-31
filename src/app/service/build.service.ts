import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Build} from '../model/build';
import { Observable } from 'rxjs';
@Injectable()
export class BuildService {
  private buildsUrl: string;
  constructor(private http: HttpClient) {
    this.buildsUrl = 'https://diabloplano.herokuapp.com/builds/';
  }
  public find(id: string): Observable<Build> {
    return this.http.get<Build>(this.buildsUrl+id);
  }
}
