import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
declare let cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
  @ViewChild('input') myInput;
  public txt:string="";
  constructor(private http: HttpClient,public navCtrl: NavController) {
    
  }
  
  ionViewDidEnter(){
    setTimeout(() => {
      this.myInput.setFocus();
    },150);
   
  }

  onSearch(event) {
    alert(event._value);
    //console.log(event._value);
  }

  scan() {
    cordova.plugins.SunmiScanner.scan().then((barcodeData) => {
      alert(barcodeData);
    }).catch((e) => {
      alert(e);
    });
  }

  view(){
    let data: Observable<any>;
    data = this.http.get(this.txt);
    data.subscribe(result => {
      alert(JSON.stringify(result));       
    }, error => {
        //console.log(error);
      alert('Error in List Claim');
    });
  }
   
}
