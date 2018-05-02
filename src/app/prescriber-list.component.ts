import { Component, OnChanges, OnDestroy } from '@angular/core';
import { IPrescriber } from './IPrescriber';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { data } from './data'
import { PrescriberService } from './prescriber.service';

@Component({
  //selector: 'app-list',
  templateUrl: './prescriber-list.component.html',

})
export class PrescriberListComponent implements OnInit, OnDestroy {
  constructor(private _prescriberService: PrescriberService) {

  }
  title = 'Search Prescribers';

  listFilter: string;
  pList: IPrescriber[];
  prescriberlist: IPrescriber[];
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
    //getting data from server
    //this.getPrescriber();

  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }



  search: boolean = false;
  //inMemoryPrescribersList = PrescriberListComponent.inMemoryList;
  // result1: IPrescriber[];
  // i = -1;

  searchList(): any {
    this.getPrescriber();

  }
  // searchList(): any {
  //   this.result1 = [];
  //   for (let index = 0; index < this.inMemoryPrescribersList.length; index++) {
  //     const element = this.inMemoryPrescribersList[index];
  //     //debugger;
  //     if (element.firstName === ((document.getElementById("searchBar") as HTMLInputElement).value) || element.deaNumber == (document.getElementById("searchBarNumber") as HTMLInputElement).value) {
  //       this.i++;
  //       this.result1[this.i] = element;
  //     }
  //     else {
  //       console.log("Prescriber not found");

  //     }
  //   }
  //   this.i = -1;

  //   console.log(this.result1);
  //   return this.result1;

  // }

  getPrescriber(): void {
    debugger;
    this._prescriberService.getPrescriber().subscribe((presc: IPrescriber[]) => { this.prescriberlist = presc['searchResult']; console.log(this.prescriberlist); });
    debugger;
  }

  addPrescriber(): void {
    //debugger;
    this._prescriberService.InsertPrescriber(this.currentPrescriber).subscribe((data) => { alert("Prescriber List Updated"); this.getPrescriber(); });
  }

  deleteEmployee(id): void {
    // confirm("are you sure?");
    if (confirm("Click OK to confirm.")) {
      this._prescriberService.DeletePrescriber(id).subscribe((data) => { alert("Prescriber " + id + " Deleted"); this.getPrescriber(); });

    }
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
