import { Injectable } from '@angular/core';
import {Robot} from "./robot";
import {ROBOTS} from "./mock-robots";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RobotService {

  constructor() { }

  getRobots(): Observable<Robot[]>{
    return of (ROBOTS);
  }

}
