import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  constructor(private router: Router) { }
  showLoader = true; 
  quote = history.state.data;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }


  anyTimePlan = false;
  assuredDOB ={day:'',month:'',year:''};
  words_string ="";
  premiumTermMaster=[];
  errorMsg ="";
  invalidPremium ="";  premieumBreakErrMSg =""; input ="5000000";
  benefitage_check_lbvea_age = 60;
  benefitage_check_AccedentialDIsabilityCritical_age = 60;
  unit = 1;premiumAmount = 100000; irbIncomeErr = 100000;errorMsgPlan="";lifeBenOptErrorMSg="";
  sumAMultipleof1000Error=false;
  isIncomeSelected=false;
  isError=false;
  errorMsgIR = false; invalidAmount = false;
  isETerm = true;disableIncrement=true;
  //Quote Object
  quoteDetails = {
    isSmoke:"NS",
    age:31,
    coverAge : 60,
    assuredDOB:"05/04/1991",
    sumAssured:5000000,
    tpaFlag:"Website Pop-up",
    planTerm:10,
    payingTerm:10,
    eTermEmpType:1,
    premiumFrequencyId:383,
    gender:"M",
    productID:26,
    medicalType:"Med",
    premiumOption:"No",
    incomePeriod:5,
    riskCoverOptionEtermPlus:"1",
    anualGrossPremiumAmount: 2898.0,
    installmentPremiumBeforeTax: 2898.0,
    installmentPremiumAfterTax: 3420.0,
    secYearAnnualGrossPremiumAmount: 3050.0,
    secYearInstallmentPremiumAmountBeforTax: 3050.0,
    secYearInstallmentPremiumAmountAfterTax: 3599.0,
    errorMsg: "",
    isTPADiscount: true,
    premiumTypeId:7
  }; 

  checkPlanTerm(quoteDetails:any){ 

  }
  setUnit(quoteDetails:any,premiumTypeId:number){ 

  }
  decreseVal(quoteDetails:any){ 

  }
  changeSumassured(){ 

  }
  onChange(quoteDetails:any){ 

  }
  increaseVal(quoteDetails:any){ 

  }
  goToInsurance(){ 
    this.router.navigate(['/insurance'], {state: {data: this.quote}});
  }


//Profile details module

profileDetails ={
  day:'',month:'',year:'',gender : 'M'
}


  validonClk = false
  checkdate(date:string,flag:string){
    if(flag == 'day'){ 
      if (this.profileDetails.day.length == 1) {
         this.profileDetails.day = "0" + this.profileDetails.day;
       }
       else if (this.profileDetails.day.length == 2){
         if(parseInt(this.profileDetails.day)  > 31){
           this.profileDetails.day = "";
         }
       }
    }
    else if (flag == 'month') {
       if (this.profileDetails.month.length == 1) {
         this.profileDetails.month = "0" + this.profileDetails.month;
       }
       else if (this.profileDetails.month.length == 2){
         if(parseInt(this.profileDetails.month)  > 12){
           this.profileDetails.month = "";
         }
       }
    } 
    else if (flag == 'year') {
       if (this.profileDetails.year.length == 4){
       if(parseInt(this.profileDetails.year)  < 1967 || parseInt(this.profileDetails.year)  > 2005){
         this.profileDetails.year = "";
       }
     }
  }
   this.validonClk = false;
     if(this.profileDetails.day == '' || this.profileDetails.month == '' || this.profileDetails.year == '')
     {
       this.validonClk = true;
     }
 }
  updateQuoteDetails(quoteDetails:any){ 

  }
}
