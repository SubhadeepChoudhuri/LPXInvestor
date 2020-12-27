import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Output() dataTransfer3: EventEmitter<any> = new EventEmitter<any>();

  ContactData: any[] = [];
  ContactArr: any[] = [];

  constructor(public getdata3: DataService) { }

  ngOnInit(): void {

    for (let i = 0; i < ContentComponent.LPXData.length; i++)
    {

      if(ContentComponent.LPXData[i].Investor == this.getdata3.getInvestor()){

        if(this.ContactArr.indexOf(ContentComponent.LPXData[i].ContactName+'-'+ContentComponent.LPXData[i].ContactVal) == -1){

          this.ContactArr.push(ContentComponent.LPXData[i].ContactName+'-'+ContentComponent.LPXData[i].ContactVal);

        }

      }
      
    }

    for (let i = 0; i < this.ContactArr.length; i++)
    {

      let theText = this.ContactArr[i];

      let ContactName= theText.substr(0, theText.indexOf('-')); 
      let ContactVal= theText.split("-")[1];

      let obj = {'ContactName': ContactName,'ContactVal': ContactVal};

      this.ContactData.push(obj);

    }

  }

  onChange3(val3: any){

    //console.log(val3);
    $('#AddButton').show();
  
    this.dataTransfer3.emit(val3); 
  
  }

}
