import { Injectable } from '@angular/core';
import {Robot} from "./robot";
import {ROBOTS} from "./mock-robots";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";
import {MessageService} from "./message.service";

@Injectable()
export class RobotService {

  constructor(private messageService: MessageService) { }

  getRobots(): Observable<Robot[]>{
    this.messageService.add('RobotService: fetched robots');
    return of (ROBOTS);
  }

  getRobot(id: number): Observable<Robot> {
    this.messageService.add(`RobotService: fetched robot id=${id}`);
    return of(ROBOTS.find(robot => robot.id === id));
  }

}
