import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FundComponent } from '../fund/fund.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {

  @Output() dataTransfer1: EventEmitter<any> = new EventEmitter<any>();

  @Input() isDisabled: boolean

  InvestorData: any[] = [];

  constructor(private getdata: DataService) { }

  ngOnInit(): void {
    
    for (let i = 0; i < ContentComponent.LPXData.length; i++)
    {
        if(this.InvestorData.indexOf(ContentComponent.LPXData[i].Investor) == -1){

          this.InvestorData.push(ContentComponent.LPXData[i].Investor);

        }
      
    }

}

onChange1(val1: any){

  //console.log(val1);
  $('#FundsDropdown').show();
  this.getdata.setInvestor(val1);
  this.dataTransfer1.emit(val1)

}

}
