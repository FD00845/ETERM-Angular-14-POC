import { environment } from "src/environments/environment";

export class CommonService{
    //Global Variables 
    ENCR_KEY = `${environment.ase_Key}`;
    public static ServerPath =`${environment.apiUrl}`;
    setCookie(cname :string, cvalue:string) {
        var d = new Date();
        var exdays = 30;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toTimeString();
        document.cookie = cname + "=" + cvalue + ";secure;" + exdays + ";path=/";
    } 
    getCookie(cname :string) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    deleteCookie(){
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            localStorage.clear(); 
          });
    } 
     //Encryption and Decryption Code
     ENCR = require("crypto-js");
     ENCRky = this.ENCR.enc.Utf8.parse(this.ENCR_KEY);
     cfg = {
        mode: this.ENCR.mode.ECB,
        padding: this.ENCR.pad.Pkcs7,
        iv:new ArrayBuffer(16) //this.ENCR.enc.Utf8.parse("0123456789ABCDEF")
    };

    encryptAES(objJsonStr:string) {
        var text = this.ENCR.enc.Utf8.parse(objJsonStr); 
        var encrypted = this.ENCR.AES.encrypt(text, this.ENCRky, this.cfg);
        return encrypted.ciphertext.toString(this.ENCR.enc.Base64);
    };

    decryptAES (encryptedBase64:string){ 
    const decrypted = this.ENCR.AES.decrypt(encryptedBase64, this.ENCRky, this.cfg); 
    if (decrypted) {
        try {
        const str = decrypted.toString(this.ENCR.enc.Utf8);
        if (str.length > 0) {
            return str;
            } else {
                return '{"data":"error 1"}';
            }
        } catch (e) {
           // console.log(e);
            return '{"data":"error 2"}';
        }
    }
    return '{"data":"error 3"}';
    };
    
    public EncryptRequest(Reqobj : any) {
        const objJsonStr = JSON.stringify(Reqobj); 
        return {data:this.encryptAES(objJsonStr)};
    } 
    //DecryptResponse 
    public DecryptResponse (ResObj : any)  { 
        if(ResObj.data && ResObj.data!="" && ResObj.data!=null){ 
            ResObj.data = JSON.parse(this.decryptAES(ResObj.data)); 
        }
        return ResObj;
    } 
}