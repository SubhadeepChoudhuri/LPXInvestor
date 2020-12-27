import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  @Output() dataTransfer2: EventEmitter<any> = new EventEmitter<any>();

  @Input() FundisDisabled: boolean;

  FundData: any[] = [];
  FundArr: any[] = [];
  
  constructor(public getdata: DataService) { }

  ngOnInit(): void {
 
   for (let i = 0; i < ContentComponent.LPXData.length; i++)
    {

      if(ContentComponent.LPXData[i].Investor == this.getdata.getInvestor()){

        if(this.FundArr.indexOf(ContentComponent.LPXData[i].FundCategory+'_'+ContentComponent.LPXData[i].Fund+'_'+ContentComponent.LPXData[i].isDisabledFund) == -1){

          this.FundArr.push(ContentComponent.LPXData[i].FundCategory+'_'+ContentComponent.LPXData[i].Fund+'_'+ContentComponent.LPXData[i].isDisabledFund);

        }

      }
      
    }

    for (let i = 0; i < this.FundArr.length; i++)
    {

      let theText = this.FundArr[i];

      let FundCat = theText.substr(0, theText.indexOf('_')); 
      let FundVal= theText.split("_")[1];
      let isDisabledFund= theText.split("_")[2];

      let obj = {'FundCat': FundCat, 'FundVal': FundVal, 'isDisabledFund': isDisabledFund};

      this.FundData.push(obj);

    }
 
  }

  onChange2(val2: any){

    $('#ContactsDropdown').show();

    //let index = this.FundData.indexOf(val2);
    let index = this.FundData.findIndex(row=>row.FundVal == val2.FundVal);

    this.FundData[index].isDisabledFund = true;

    this.dataTransfer2.emit(val2); 
  
  }

}
