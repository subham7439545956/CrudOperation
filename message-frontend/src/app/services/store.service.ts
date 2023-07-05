import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  baseURL = 'http://localhost:8000/Users';
  chatURL = 'http://localhost:8000/Chats';
  constructor(private http: HttpClient) {}

  getSingleUser(data: any) {
    return this.http.get(this.baseURL + '/email/' + data);
  }

  createUser(content: any) {
    return this.http.post(this.baseURL + '/add', content);
  }

  getAllUser() {
    return this.http.get(this.baseURL + '/getAll');
  }
  searchEmployees(query: string) {
    return this.http.get(`http://localhost:8000/Users/getAll?search=${query}`);
  }

  upldateUser(content: any, _id: any) {
    return this.http.patch(this.baseURL + '/update/' + _id, content);
  }

  createMessage(content: any) {
    return this.http.post(this.chatURL + '/add', content);
  }

  getAllMessage() {
    return this.http.get(this.chatURL + '/getAll');
  }

  getSingleMessage(roomId: any) {
    return this.http.get(this.chatURL + '/roomID/' + roomId);
  }

  updateSingleMessage(content: any, roomId: any) {
    return this.http.patch(this.chatURL + '/update/' + roomId, content);
  }
}
