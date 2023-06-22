import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

    addtolldata=[  
     { 
      id:1,
      "tollname":"hyderabad",
        "carjeepvan":75/50,
        "LCV":30/30,
        "truck":20/20,
        "heavyvehicle":30/30
    }
    ]
   retrivetollname(){
   return this.addtolldata.map( (e) => { return e.tollname})
   }
    id=2
    pushnewtolldata(tollname:string,carjeepvan:number,LCV:number,truck:number,heavyvehicle:number){
      this.addtolldata.push({
       id:this.id++,
        "tollname": tollname,
        "carjeepvan": carjeepvan,
        "LCV": LCV,
        "truck": truck,
        "heavyvehicle":heavyvehicle
      })
    }
    deletetoll(index:number){
      this.addtolldata.splice(index,1)
    }

    addnewvehicle=[
      {
        id:1,
        "vehicletype":"LCV",
        "vehiclenumber":"AP04RT1432",
        "datetime":"09/03/2023,14:07",
        "tollname":"hyderabad",
        "tariff":323
      },
      
    ]
    
    
    pushaddnewvehicle(tollname:string,vehiclenumber:string,datetime:any,vehicletype:string,tariff:number){
      this.addnewvehicle.push({
        id:this.id++,
        "tollname":tollname,
        "vehiclenumber":vehiclenumber,
        "datetime":datetime,
        "vehicletype":vehicletype,
        "tariff":tariff
      })
    }
    filtered:any=[]
    search(tollname:string){
      this.filtered=this.addnewvehicle.filter((ele)=>{
        return ele.tollname.includes(tollname)
      })
      console.log(this.filtered)
    }
}
