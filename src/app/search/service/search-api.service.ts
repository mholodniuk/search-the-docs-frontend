import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Hit } from "../../document/model/document.model";

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  readonly searchUrl = `${environment.api}/search`;

  constructor(private http: HttpClient) {
  }

  fullTextSearch(phrase: string, requester: number) {
    const params = new HttpParams({fromObject: {phrase: phrase, requester: requester}});

    return this.http.get<Hit[]>(this.searchUrl, {params: params})
  }
}
