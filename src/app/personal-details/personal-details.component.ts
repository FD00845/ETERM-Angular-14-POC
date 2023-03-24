import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators  } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  eKycForm;
  policyForm;
  submitted = false;
  constructor(private fb: FormBuilder) {  
      this.eKycForm = this.fb.group({
        aadharVerify: ['', Validators.required ],
        otp:['', Validators.required ]
     });
     this.policyForm = this.fb.group({
      add1: ['', Validators.required ],
      add2:['', Validators.required ],
      add3:['', Validators.required ],
      pincode:['', Validators.required ],
      contactCommState:['', Validators.required ],
      contactCommCity:['', Validators.required ],
      panid:['', [Validators.required,Validators.pattern(/[a-zA-Z]{3}[PCHpch]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/)] ],
      maritalStatus:['', Validators.required ],
      Nationality:['', Validators.required ],
      residentStatus:['', Validators.required ]
   });
    } 
    get eKyc()
    {
        return this.eKycForm.controls;
    }
    get Policy()
    {
        return this.policyForm.controls;
    }
  ngOnInit(): void {
  }
  showLoader =false; 
  //Objects
  quoteDetails = {
    applicationRefNo:'A01154027',
    planName : "Indiafirst Life E-Term Plus Plan",
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
    isLAPANVerified:false
  }; 
  isEKycFlow = false;
  test="";
  enableEVerify= false;
  Showaddrlabel= false;
  //Actions
  getRequiredDocList(){}
  currentTab = "Basic";
  basicDetailsClick(menuname:any){}
  employmentDetailsClick(menuname:any){}
  nomineeDetailsClick(menuname:any){}
  clickfnctn(value:any){}
  keyfnctn(value:any){}
  sendOTP(){}
  verifyOTP(){}
  ekycComplianceOk(){}
  editeKyc(){} 
  checkPanValidOrNot(policyForm:any,Status:any){}
  changeCityState(PinCode:any){
    // alert(PinCode);
    // console.log(this.policyForm.value);
  }

  next(policyForm:any,Status:any){ 
    this.submitted = true;
    if (this.policyForm.invalid) {
      return;
    }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.policyForm.value, null, 4));
  }
}
