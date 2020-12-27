import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { InvestorComponent } from './investor/investor.component'
import {MatTooltipModule} from '@angular/material/tooltip';
import { FundComponent } from './fund/fund.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    InvestorComponent,
    FundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
