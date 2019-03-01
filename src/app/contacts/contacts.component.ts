import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  /* Paramètres (propriétés de la classe) */
  selectedContact: Contact;
  contacts; // je voudrais passer par le service

  /* Methodes */
  constructor(private contactservice: ContactService) {
  }

  ngOnInit() {
    this.contactservice.getContacts().subscribe(
      contacts => this.contacts = contacts
    );
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
