import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Contact } from './contact';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  
  getContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

  getContact(id): Observable<Contact> {
    return this.http.get<Contact>('https://jsonplaceholder.typicode.com/users/' + id);

  }
}
