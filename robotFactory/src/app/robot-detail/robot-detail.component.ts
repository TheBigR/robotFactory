import { Component, OnInit, Input } from '@angular/core';
import {Robot} from "../robot";

@Component({
  selector: 'app-robot-detail',
  templateUrl: './robot-detail.component.html',
  styleUrls: ['./robot-detail.component.css']
})
export class RobotDetailComponent implements OnInit {

  @Input() robot: Robot;

  constructor() { }

  ngOnInit() {
  }

}
