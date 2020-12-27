import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  investor: string;
  fund: string;
  constructor() { }
  
  setInvestor(investor: string){
    this.investor = investor;
    //console.log(this.investor);
  }

  getInvestor() {
    return this.investor;
  }

}
