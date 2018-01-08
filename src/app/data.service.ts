import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {

  }

  async sendError(error: any) {
      //return await this.http.post("my-error-api", error).toPromise();
      return {sucess: true}
  }

}