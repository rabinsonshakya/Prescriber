import { Component, OnInit } from '@angular/core';
import { IPrescriber } from '../IPrescriber';
import { PrescriberService } from '../prescriber.service';
import { $ } from 'protractor';

@Component({
  templateUrl: './add-prescriber.component.html'
})
export class AddPrescriberComponent implements OnInit {

  constructor(private _presciberService: PrescriberService) { }

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
  ngOnInit() {
  }

  addPrescriber(): void {
    //debugger;
    this._presciberService.InsertPrescriber(this.currentPrescriber).subscribe((data) => { alert("Prescriber List Updated"); });
  }

  enterPrescriber(id: IPrescriber) {
    console.log(id);
    this.currentPrescriber.id = id.id;
    this.currentPrescriber.firstName = id.firstName;
    this.currentPrescriber.lastName = id.lastName;
    this.currentPrescriber.emailId = id.emailId;
    this.currentPrescriber.phoneNumber = id.phoneNumber;
    this.currentPrescriber.faxNumber = id.faxNumber;
    this.currentPrescriber.gender = id.gender;
    this.currentPrescriber.dob = id.dob;
    this.currentPrescriber.specialization = id.specialization;
    this.currentPrescriber.deaNumber = id.deaNumber;
    this.currentPrescriber.active = id.active;
    this.currentPrescriber.description = id.description;

  }
  
  
}

