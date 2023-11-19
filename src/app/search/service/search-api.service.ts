import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { HitResponse } from "../../document/model/document.model";

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  readonly searchUrl = `${environment.api}/search`;

  constructor(private http: HttpClient) {
  }

  fullTextSearch(phrase: string, requester: number, fragmentSize: number) {
    const params = new HttpParams({
      fromObject: {
        "phrase": phrase,
        "requester": requester,
        "fragment-size": fragmentSize
      }
    });

    return this.http.get<HitResponse>(this.searchUrl, {params: params});
  }
}
