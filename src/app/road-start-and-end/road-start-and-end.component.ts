import { Component } from '@angular/core';
import { ROAD_META_DATA, RoadMetaData } from '../data/eastwood';
@Component({
  selector: 'app-road-start-and-end',
  templateUrl: './road-start-and-end.component.html',
  styleUrls: ['./road-start-and-end.component.scss']
})
export class RoadStartAndEndComponent {
  readonly roadData: RoadMetaData[] = ROAD_META_DATA;

  roadIndex: number;
  roadMetaData: RoadMetaData;

  showAnswer = false;

  constructor() {
    this.roadIndex = this.generateIndex();
    this.roadMetaData = this.roadData[this.roadIndex];
  }

  generateIndex() {
    return Math.floor(Math.random() * this.roadData.length);
  }

  displayAnswer() {
    this.showAnswer = this.showAnswer || !this.showAnswer;
  }

  nextQuestion() {
    this.showAnswer = false;
    this.roadMetaData = this.roadData[this.generateIndex()];
  }

  get roadName() {
    return this.roadMetaData.road_name;
  }

  get roadStart() {
    return this.roadMetaData.start;
  }

  get roadEnd() {
    return this.roadMetaData.end;
  }

  get notes() {
    return this.roadMetaData.notes;
  }
}
