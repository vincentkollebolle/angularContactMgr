import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactserivce: ContactService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getContact();
  }

  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactserivce.getContact(id).subscribe(contact => this.contact = contact);

  }

}
