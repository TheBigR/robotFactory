import { Component, OnInit } from '@angular/core';
import {Robot} from '../robot';
import {ROBOTS} from "../mock-robots";

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {

  robots = ROBOTS;

  selectedRobot: Robot;

  onSelect(robot: Robot): void {
    this.selectedRobot = robot;
}

  constructor() { }

  ngOnInit() {
  }


}
