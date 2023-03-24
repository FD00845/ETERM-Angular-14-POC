import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {  
  constructor(private toastr: ToastrService) { } 
  private foo:FileDetails = new FileDetails();

  ngOnInit(): void {
    this.idProofSelected ="Select ID proof";
      }

      showLoader =false; 
    //Quote Object
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
      premiumTypeId:7
    }; 

    idProofList = [{Id:1,documentName:'Aadhar Card'}, {Id:2,documentName:'Pan Card'}];
    //uploadDocumentObj = <any>[];
    uploadDocumentObj: Array<any> = [];  
    data = {documentName:'',filename:'',fileSize:''};
    suitabilityPdfData = {fileName:'' };
    base64Image = "";
    secondaryLARequired = false;
    idProofSelected ="";
    Selectedfile = null;


    //Methods

    onIDProofSelection(idProofSelected:string){
      this.idProofSelected = idProofSelected;
    }
    showImage(data:string){

    }
    removeDocument(index:number,category:string,id:string){

    }
    imageError = "";
    UploadDocuments(fileInput:any){
      this.Selectedfile = fileInput.target.files[0];
     // this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb'; 
               // return false;
            }

            // if (fileInput.target.files[0].type) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;console.log(e);
                this.uploadDocumentObj.push({documentName:e.target.result.toString(),filename:fileInput.target.files[0].name,fileSize:fileInput.target.files[0].size});
                this.toastr.success("File Uploaded successfully...");
            }; 
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
} 

export class FileDetails{
  public documentName="";
  public filename="";
  public fileSize="";
}