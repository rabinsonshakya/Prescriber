import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { PrescriberService } from '../prescriber.service';
import { IPrescriber } from '../IPrescriber';

@Component({
  templateUrl: './prescriber-details.component.html',
})
export class PrescriberDetailsComponent implements OnInit {
  constructor(private _prescribeService: PrescriberService, private _route: ActivatedRoute) {

  }

  title = "Details of Prescriber: ";
  prescriber: IPrescriber;
  editMode: boolean = false;
  active:boolean = true;
  message: string = "Edit";
  currentPrescriber: IPrescriber = {
    id: null,
    firstName: null,
    lastName: null,
    emailId: null,
    phoneNumber: null,
    faxNumber: null,
    gender: null,
    dob: null,
    specialization: null,
    deaNumber: null,
    active: null,
    description: null
  }

  ngOnInit(): void {
    console.log(this._route.snapshot.params['id']);
    //this._prescriberService.getPrescriberById(this._route.snapshot.params['id']).subscribe((temp: IPrescriber) =>{ this.prescriber = temp; console.log(this.prescriber); });
    // debugger;
    this._prescribeService.getPrescriberById(this._route.snapshot.params['id']).subscribe((presc: IPrescriber) => { this.prescriber = presc; console.log(this.prescriber); });
    if(this.prescriber.active === "No" ){
      this.active = true;
    }
    else if(this.prescriber.active === "Yes"){
      this.active = false;
    }
  }

  open(): void {
    this._prescribeService.getPrescriberById(this._route.snapshot.params['id']).subscribe((presc: IPrescriber) => { this.prescriber = presc; console.log(this.prescriber); });
  }

  enter(): void {
    this.editMode = !this.editMode;
  }

  updatePrescriber(id): any {
    this._prescribeService.UpdatePrescriber(this.prescriber).subscribe((data) => { alert("Prescriber " + id + " Updated");});
    this.editMode = !this.editMode;
  }

  updatePrescriberStatus(id): any {
    if(this.currentPrescriber.active === 'Yes'){
      this.currentPrescriber.active = 'No';
    }
    else if(this.currentPrescriber.active = 'No'){
      this.currentPrescriber.active = 'Yes';
    }
    this.currentPrescriber.id = this.prescriber.id;
    this._prescribeService.UpdatePrescriberStatus(this.currentPrescriber).subscribe((data) => { alert("Prescriber " + id + " Updated");});
    this.prescriber.active = this.currentPrescriber.active;
  }

}
