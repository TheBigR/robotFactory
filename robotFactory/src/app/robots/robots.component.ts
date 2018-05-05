import { Component, OnInit } from '@angular/core';
import {Robot} from '../robot';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {

  robot: Robot = {
    name: 'omer Adam',
    id: 1,
    branchName: 'Wcc',
    managerName: 'donald',
    employees: 4,
    city: 'new york',
    coordinates: {lat: 13, lon: 44}
  };
  constructor() { }

  ngOnInit() {
  }


}
