import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  constructor() { }
  showLoader = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
  assuredDOB ={day:'',month:'',year:''};
  planName = "INDIAFIRST LIFE E-TERM PLUS PLAN";
  quoteId = "640311";

  installmentPremiumBeforeTax= 2898.0;
  installmentPremiumAfterTax= 3420.0;
  secYearAnnualGrossPremiumAmount= 3050.0;
  secYearInstallmentPremiumAmountBeforTax= 3050.0;
  secYearInstallmentPremiumAmountAfterTax= 3599.0;
  sumAssured = "5000000";
  benefitsAdded = "Life Benefit";
  termPlan = 10;
  Proposaldate = new Date();
  mode = "online";
  test ="";
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
    premiumTypeId:7,
    annualIncome : 0,
    fullname : 'Prashant Patil',
    mobile :'9766687571',
    email : 'prashant.patil451991@gmail.com',
    pincode : '415209',
    state :'Maharashtra',
    city : 'Satara',
    checked:false
    
  };
  setMinAnnual(eTermEmpType:number){

  }
  changeCityState(eTermEmpType:string){

  }
//defaults
minAnnual = 100000;
// quotedetails ={};
quoteDetails1 = {policyOrClient:'',policyNumber:''}
showDiscountMsg = false;
ExistingMember = false;

ViewMember = false;

resetData(){}
ExistingCustomer(chkmem : boolean){
  if(!this.ViewMember){
    this.ViewMember = true;
  }else{
    this.ViewMember= false;
  }
  
}
clickfnctn(PolicyNo:string){
    
  }
  keyfnctn(PolicyNo:string){
    
  }
  getExistingCustomerData(PolicyNo:any){
    
  }
  setFirstAndLastName(fullname:string){

  }
}
