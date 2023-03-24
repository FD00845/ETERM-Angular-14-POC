import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css']
})
export class DOBComponent implements OnInit {
  @Input() formname: string = 'frm';
  @Input() formid: string = 'frmid';
  @Input() validonclick: boolean = false;
  @Output() dateOfbirth = new EventEmitter<string>();
  @Input() inputdate :string="";

  assuredDOB ={day:'',month:'',year:''};
  constructor() { 
     
  }

  ngOnInit(): void {
    if(this.inputdate!=""){
      var datearr = this.inputdate.split('/');
      this.assuredDOB.day = datearr[0];
      this.assuredDOB.month = datearr[1];
      this.assuredDOB.year = datearr[2];
    }
  }
  
  //validonClk = false; 
  checkdate(date:string,flag:string){
    if(flag == 'day'){ 
      if (this.assuredDOB.day.length == 1) {
         this.assuredDOB.day = "0" + this.assuredDOB.day;
       }
       else if (this.assuredDOB.day.length == 2){
         if(parseInt(this.assuredDOB.day)  > 31){
           this.assuredDOB.day = "";
         }
       }
    }
    else if (flag == 'month') {
       if (this.assuredDOB.month.length == 1) {
         this.assuredDOB.month = "0" + this.assuredDOB.month;
       }
       else if (this.assuredDOB.month.length == 2){
         if(parseInt(this.assuredDOB.month)  > 12){
           this.assuredDOB.month = "";
         }
       }
    } 
    else if (flag == 'year') {
       if (this.assuredDOB.year.length == 4){
       if(parseInt(this.assuredDOB.year)  < 1967 || parseInt(this.assuredDOB.year)  > 2005){
         this.assuredDOB.year = "";
       }
     }
     }
     if(this.assuredDOB.day != '' && this.assuredDOB.month != '' && this.assuredDOB.year != '')
     {
       this.validonclick = false;
       var dob = this.assuredDOB.day +"/"+this.assuredDOB.month +"/"+this.assuredDOB.year; 
       this.dateOfbirth.emit(dob);
     }
 }
 
}
