import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl= environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllQuestion(){
    return this.http.get<any>(this.baseUrl + 'question');
  }
}
