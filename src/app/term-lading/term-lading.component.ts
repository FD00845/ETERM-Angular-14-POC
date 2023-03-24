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
 
 showLoader =false; 
 Userdetails = {userName: "eTermUser", password: "Fulcrum#1", role: "BDM"};

generateToken(){ 
  this.showLoader =true;  
  this.http.Post('token/generate',this.Userdetails).subscribe((respose:any)=>{
    this.showLoader =false;
    this.toastr.success("token generated successfully...");
    var tokenstr = "Token " + respose.Token;
    this.commonser.setCookie("_tokenId", btoa(tokenstr)); 
   
    // this.http.GetWithToken('master/master-data-list?requestedPage=bi-page',tokenstr).subscribe((respose:any)=>{
    //   this.toastr.success("Masters fetching successfully..."); 
    //   console.log(respose.data);
    // });  

    //application/getPTS?appRefNo=P83392271

    // this.http.Post('application/getPTS?appRefNo=P83392271',{}).subscribe((respose:any)=>{
    //  this.toastr.success("Masters fetching successfully..."); 
    //   console.log(respose.data);
    // });  

    this.http.PostWithToken('quoteDetails/generateETermPremium',this.quote,tokenstr).subscribe((respose:any)=>{
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
