import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemListComponent } from './item-list/item-list.component';
import {ItemService} from './service/item.service';
import { BuildListComponent } from './build-list/build-list.component'
import { BuildDescService } from './service/build-desc.service';
import { BuildViewComponent } from './build-view/build-view.component';
import { BuildService } from './service/build.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SkillService } from './service/skill.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemListComponent,
    BuildListComponent,
    BuildViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatRippleModule,
    FlexLayoutModule
  ],
  providers: [ItemService,BuildDescService,BuildService,SkillService],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
