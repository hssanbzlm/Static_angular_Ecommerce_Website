import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TechserviceService } from '../services/techservice.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit { 


  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;


  constructor(private _formBuilder: FormBuilder, private service:TechserviceService ,private router:Router) { }

  ngOnInit() {    
    if(this.service.getPanier().length==0) 
    this.router.navigateByUrl("/pc");


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required,Validators.pattern('[a-z A-Z]*')]]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', [Validators.required,Validators.minLength(15)]]
    }); 
    this.thirdFormGroup=this._formBuilder.group({
      thirdCtrl:['',[Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(8)]]

    });
    
 



  }
 
 onClickconfirm()
 {  
  this.service.deletePanier();
   this.router.navigateByUrl("/pc"); 
   
 }


}
