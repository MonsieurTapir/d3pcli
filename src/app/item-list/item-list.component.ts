import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
import {Item} from '../model/item';
import {ItemService} from '../service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit,AfterContentInit {
  items: Item[];
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 12,
    lg: 10,
    md: 8,
    sm: 6,
    xs: 4
  }


  constructor(private itemService: ItemService,private observableMedia: MediaObserver) { }
  ngAfterContentInit() {
    this.observableMedia.media$.subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
  ngOnInit(): void {
    this.itemService.findAll().subscribe(data => {
      this.items=data;
    });
  }

}
