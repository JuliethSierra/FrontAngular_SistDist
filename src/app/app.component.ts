import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAngular';
public dataApi: any;
public dataApi1: any;
public stopCont1: boolean = false;
public stopCont2: boolean = false;

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(resp=>{
      this.dataApi = (resp);
      this.stopCont1 = true;
    });

  
    this.dataService.getData1().subscribe(resp1=>{
      this.dataApi1 = (resp1);
      this.stopCont2 = true;
    });
    
  }

}

