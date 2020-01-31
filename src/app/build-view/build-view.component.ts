import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {Build} from '../model/build'
import {BuildService} from '../service/build.service'
import { ItemService } from '../service/item.service';
import { Item } from '../model/item';
import { Skill } from '../model/skill';
import {Enums} from '../model/enums'
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-build-view',
  templateUrl: './build-view.component.html',
  styleUrls: ['./build-view.component.scss']
})
export class BuildViewComponent implements OnInit {
  build: Build;
  itemsEquipped : {[id:string]: Item};
  items: {[idx:number] : Item};
  skills: {[idx:number] : Skill};
  slots = Enums.slots;
  skillslots= Enums.skillSlots;
  passiveSlots = Enums.passiveSlots;
  constructor(private route: ActivatedRoute,
    private buildservice : BuildService,
    private itemService : ItemService,
    private skillService: SkillService) { 
      this.itemsEquipped={};
      this.items={};
      this.skills={};
    }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.buildservice.find(id).subscribe(data => {
      this.build=data;
    });
    this.itemService.findAll().subscribe(data =>{
      data.forEach(function (value){
        this.items[value.id] = value
        this.items[value.id].color = Enums.colors[this.items[value.id].color]
      },this);
    });
   
    this.skillService.findAll().subscribe(data =>{
      data.forEach(function (value){
        this.skills[value.id] = value
      },this);
    });
   
  }

}
