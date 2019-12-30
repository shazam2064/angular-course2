import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  namePerson: string = 'Steve';
  lastNamePerson: string = 'Palchulk';
  age: number = 18;

}
