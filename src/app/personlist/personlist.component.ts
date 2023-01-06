import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit{

  salespersonlist: Person[] = [
    new Person("Kaushik1" , "Ghosh", "kaushik@gmail.com" ,450),
    new Person("Kaushik2" , "Ghosh", "kaushik@gmail.com" ,650),
    new Person("Kaushik3" , "Ghosh", "kaushik@gmail.com" ,750),
    new Person("Kaushik4" , "Ghosh", "kaushik@gmail.com" ,850),

  ]

  ngOnInit(){

  }
}
