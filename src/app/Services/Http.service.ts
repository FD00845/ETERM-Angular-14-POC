import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonService } from "./Common.service";
import { Injectable } from "@angular/core";  
@Injectable()

export class HttpService{
    constructor(private http:HttpClient){}

    Post(URL: string,obj: any){
        return this.http.post(CommonService.ServerPath + URL,obj); 
    }

    Get(URL: string){
        return this.http.get(CommonService.ServerPath + URL); 
    }
    GetWithToken(URL: string,token: string){
        const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Authorization', token); 
        return this.http.get(CommonService.ServerPath + URL, { 'headers': headers }); 
    }

    PostWithToken(URL: string,obj: any,token: string){
        const headers= new HttpHeaders() 
        .set('content-type', 'application/json;charset=UTF-8')
        .set('Authorization', token) 
        .set('secure','false')
        ; 
        return this.http.post(CommonService.ServerPath + URL,obj, { 'headers': headers}); 
    }

    PostFileData(URL: string,Obj :any,token: string){
        const headers= new HttpHeaders()
        // .set('content-type', 'undefined')
        .set('Authorization', token); 
        return this.http.post(CommonService.ServerPath + URL,Obj, { 'headers': headers }); 
    }
}