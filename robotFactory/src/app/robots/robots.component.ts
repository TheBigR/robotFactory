import { Component, OnInit } from '@angular/core';
import {Robot} from '../robot';
//import {ROBOTS} from '../mock-robots';
import {RobotService} from "../robot.service";


@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {

  robots: Robot[];

  selectedRobot: Robot;

  onSelect(robot: Robot): void {
    this.selectedRobot = robot;
}

  constructor(private robotService: RobotService) { }

  getRobots(): void {
    this.robotService.getRobots().subscribe(robots => this.robots = robots);
  }

  ngOnInit() {
    this.getRobots();
  }


}
