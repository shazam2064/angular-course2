import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  addPerson = false;
  addPersonStatus = 'No person has been added';
  titlePerson = 'Creep Slayer';
  personCreated = false;

  constructor() {
    setTimeout(
      () => {
        this.addPerson = true;
      }
      , 3000);
  }

  onCreatePerson() {
    this.personCreated = true;
    this.addPersonStatus = 'Person has been added';
  }

  onChangePerson(event: Event) {
    this.titlePerson = (<HTMLInputElement> event.target).value;
  }
}
