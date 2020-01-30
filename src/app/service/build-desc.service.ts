import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BuildDesc} from '../model/build-desc';
import { Observable } from 'rxjs';

@Injectable()
export class BuildDescService {
  private buildsUrl: string;
  constructor(private http: HttpClient) {
    this.buildsUrl = 'https://diabloplano.herokuapp.com/builds';
  }
  public findAll(): Observable<BuildDesc[]> {
    return this.http.get<BuildDesc[]>(this.buildsUrl);
  }
}
