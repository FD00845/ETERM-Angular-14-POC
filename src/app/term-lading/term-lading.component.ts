import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/Common.service';
import { HttpService } from '../Services/Http.service';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-term-lading',
  templateUrl: './term-lading.component.html',
  styleUrls: ['./term-lading.component.css']
})
export class TermLadingComponent implements OnInit {

  constructor(private router: Router,private http: HttpService,private commonser:CommonService,private toastr: ToastrService) {     
  }

  ngOnInit(): void { 
    // var encrstr = this.commonser.EncryptRequest(this.quote);
    // console.log(encrstr); 
    // console.log(this.commonser.DecryptResponse(encrstr))
  } 
  youTubeUrl={src2:'',apoxymedia:'',yoadsmedia:'',intellectadz:''}; 
  assuredDOB ={day:'',month:'',year:''};
  validonClk = false; 
  quote = {
        isSmoker:"NS",
        age:31,
        assuredDOB:"",//05/04/1991
        dob:'',
        sumAssured:5000000,
        tpaFlag:"Website Pop-up",
        planTerm:10,
        payingTerm:10,
        eTermEmpType:1,
        premiumFrequencyId:383,
        assuredGender:"M",
        productID:26,
        medicalType:"Med",
        premiumOption:"No",
        incomePeriod:5,
        riskCoverOptionEtermPlus:"1"
  }; 

 quote1={
  "lifeAssuredDetail": {
      "Salutation": "Mr.",
      "FirstName": "Akash Name",
      "MiddleName": "Kumar",
      "LastName": "Kaushik",
      "Address1": "RZ Block",
      "Address2": "Extn Janakpuri",
      "Landmark": "Near Janakpuri Mall",
      "Gender": "Male",
      "IsSmoker": true,
      "DOB": "1994-01-01",
      "EmailId": "akaushiK@yopmail.com",
      "EmailId2": "mansi.naik@gmail.com",
      "MobileNumber": "8906911089",
      "MobileNumber2": "8906911089",
      "Pincode": "387320",
      "City": "Kheda",
      "State": "Gujarat",
      "nsap": false,
      "cdf": false
  },
  "planSectionDetails": {
      "SumAssured": 300000,
      "PremiumPayingTerm": 1,
      "AnnualPremiumAmount": 0,
      "IsStaff": true,
      "EmpoyeeCode": "Code101",
      "EmpoyerName": "IndiaFirst Life",
      "ProductName": "IndiaFirst Life Plan",
      "PlanTerm": 10,
      "IncomeBenefitOption": "Definite Income Option",
      "InstallmentPremiumAmount": 50000,
      "MonthlyIncomeBenefit": 0,
      "GapPeriod": 0,
      "IsRiderOpted": true,
      "IsWOPRiderOpted": false,
      "WOPTerm": 5,
      "WOPRiskCover": "WOP on Death",
      "IsTermRiderOpted": true,
      "RiderSumAssured": 250000,
      "RiderTerm": 6,
      "PremiumFrequency": "Single",
      "IncomePeriod": 0,
      "PayoutGapYear": 0,
      "IncomeOption": "5 Years",
      "IsExtraLifeSelected": "",
      "UIN": "143N054V04",
      "PremiumType": "Single",
      "RiskCoverOption": "1",
      "PayOutOption": 0,
      "DeathBenefit": "5 Years",
      "Operation": "generateBI",
      "ProposalStartDate": "2022-05-06",
      "IsExistingCustomer": true,
      "IsClientNumber": true,
      "ClientNumber": "C10102",
      "IsPolicyNumber": false,
      "PolicyNumber": "P10102",
      "FundFuturePremiumWithSurvivalBenefit": true,
      "SurvivalPayoutAdjustmentForRenewalPremium": true,
      "IncomePayoutFrequency": "Yearly",
      "Source": "BlueChip"
  },
  "proposerDetail": {
      "Salutation": "Mr.",
      "FirstName": "Sanchit First",
      "MiddleName": "Kumar",
      "LastName": "Sharma",
      "Address1": "Noida Sec 62",
      "Address2": "Sunflower Society",
      "Address3": "",
      "Landmark": "near city center",
      "Gender": "Male",
      "IsSmoker": true,
      "DOB": "2000-01-01",
      "EmailId": "sanchit@yopmail.com",
      "EmailId2": "test@gmail.com",
      "MobileNumber": "8765432190",
      "MobileNumber2": "9898989898",
      "Pincode": "387320",
      "City": "Kheda",
      "State": "Gujarat",
      "InsuranceType": "HUF",
      "IsLAPR": false
  },
  "agentInformation": {
      "partnerName": "GIRNAR INSURANCE BROKERS PRIVATE LIMITED",
      "branchCode": "OB002",
      "branchName": "GIRNAR INSURANCE BROKERS",
      "channelCode": "SC1081",
      "channelName": "Broker",
      "partnerAgentCode": "CA000217",
      "partnerAgentName": "GIRNAR INSURANCE BROKERS PRIVATE LIMITED",
      "lgCode": "CA000217",
      "lgName": "GIRNAR INSURANCE BROKERS PRIVATE LIMITED",
      "spCode": "CA000217",
      "spName": "GIRNAR INSURANCE BROKERS PRIVATE LIMITED",
      "intermediaryLicenceNumber":"abcd000111",
      "intermediaryLicenceCode":"abcd0002222"
  }
}
 showLoader =false; 
 Userdetails = {username: "Santosh", password: "123456"};

generateToken(){ 
  this.showLoader =true;  
  this.http.Post('buyonline-auth-service/auth/generateToken',this.Userdetails).subscribe((respose:any)=>{
    this.showLoader =false;
    this.toastr.success("token generated successfully...");
    var tokenstr = "Bearer " + respose.token;
    //this.commonser.setCookie("Barer ", btoa(tokenstr)); 
   
    // this.http.GetWithToken('master/master-data-list?requestedPage=bi-page',tokenstr).subscribe((respose:any)=>{
    //   this.toastr.success("Masters fetching successfully..."); 
    //   console.log(respose.data);
    // });  

    //application/getPTS?appRefNo=P83392271

    // this.http.Post('application/getPTS?appRefNo=P83392271',{}).subscribe((respose:any)=>{
    //  this.toastr.success("Masters fetching successfully..."); 
    //   console.log(respose.data);
    // });  

    this.http.PostWithToken('buyonline-quote-service/generate/quote',this.quote1,tokenstr).subscribe((respose:any)=>{
         this.toastr.success("quote generated successfully..."); 
         this.router.navigate(['/premium'], {state: {data: this.quote}});

     });   
    // this.router.navigate(['/premium'], {state: {data: this.quote}}); 
  });  
} 

getQuoteDetails(){
    //this.assuredDOB ={day:'',month:'',year:''};
    this.validonClk = false;
    if(this.quote.assuredDOB == '' || !this.quote.assuredDOB)
    {
      this.validonClk = true;
    }else{ 
     // this.quote.assuredDOB = this.assuredDOB.day +"/"+this.assuredDOB.month +"/"+this.assuredDOB.year;
      this.generateToken();
    } 

    // this.validonClk = false;
    // if(this.assuredDOB.day == '' || this.assuredDOB.month == '' || this.assuredDOB.year == '')
    // {
    //   this.validonClk = true;
    // }else{ 
    //   this.quote.assuredDOB = this.assuredDOB.day +"/"+this.assuredDOB.month +"/"+this.assuredDOB.year;
    //   this.generateToken();
    // } 
 } 
}
