import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import {BuildDesc} from '../model/build-desc'
import {BuildDescService} from '../service/build-desc.service'
import {Enums} from '../model/enums'

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss']
})
export class BuildListComponent implements OnInit,AfterContentInit {
  builds: BuildDesc[];
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 4,
    lg: 3,
    md: 2,
    sm: 2,
    xs: 1
  }
  classNames = Enums.classNames
  classImg = Enums.classImg
  
  constructor(private buildDescService : BuildDescService,private observableMedia: MediaObserver) { }
  ngAfterContentInit() {
    this.observableMedia.media$.subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
  ngOnInit(): void {
    this.buildDescService.findAll().subscribe(data => {
      this.builds=data;
    });
    }
}
