import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

   // Using POST, GET, PUT DELETE methods

  // Create employee records using POST method
  postEmployee(data: any){
    return this._http.post<any>("http://localhost:8000/data",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // Get employee data using get method
  getEmployee(){
    return this._http.get<any>("http://localhost:8000/data").pipe(map((res:any)=>{
      return res;
    }))
  }

  // Update employee data using Put Method
  updateEmployee(data:any, id:number){
    return this._http.put<any>("http://localhost:8000/data/"+id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // Delete employee data using Delete Method
  deleteEmployee(id:number){
    return this._http.delete<any>("http://localhost:8000/data/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}

