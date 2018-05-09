import { Component, OnInit, Input } from '@angular/core';
import {Robot} from "../robot";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {RobotService} from "../robot.service";

@Component({
  selector: 'app-robot-detail',
  templateUrl: './robot-detail.component.html',
  styleUrls: ['./robot-detail.component.css']
})
export class RobotDetailComponent implements OnInit {

  @Input() robot: Robot;

  constructor(
    private route: ActivatedRoute,
    private robotService: RobotService,
    private location: Location
  ) {}

  ngOnInit():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.robotService.getRobot(id).subscribe(robot => this.robot = robot);
  }

  goBack(): void {
    this.location.back();
  }

}
