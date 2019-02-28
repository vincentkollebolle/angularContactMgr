import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../mock-contacts';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  /* Paramètres (propriétés de la classe) */
  contacts = CONTACTS;
  selectedContact: Contact;


  /* Methodes */
  constructor() { }

  ngOnInit() {
  }

  ifClickOnContact(contact: Contact) {
    this.selectedContact = contact;
  }
  calculateFontsize(contact: Contact) {
    const currentsize = (contact.age - 20) * 10 + 'px';
    return {'font-size': currentsize};
  }

  calculateImgsize(contact: Contact) { 

    let currentsize = 25 + 'px';
    if (contact.age >= 25 && contact.age < 30) {
      currentsize = 100 + 'px';
    } else if (contact.age >= 30) {
      currentsize = 250 + 'px';
    }
    return {'width': currentsize};
  }

}
