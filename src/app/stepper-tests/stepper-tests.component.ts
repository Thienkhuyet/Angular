import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCalendar, MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-stepper-tests',
  templateUrl: './stepper-tests.component.html',
  styleUrls: ['./stepper-tests.component.scss']
})
export class StepperTestsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  secondFormGroup1: FormGroup;
  isOptional = false;
  isOptional1 = false;
  _formBuilder: FormBuilder;
  @ViewChild(MatCalendar) matCalendar: MatCalendar<any>;
  @ViewChild(MatDatepicker) picker: MatDatepicker<Date>;
  startAt: Date;
  constructor() {
    this._formBuilder = new FormBuilder();
  }

  ngOnInit() {
    let today = new Date();
    //   this.picker.open();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getUTCFullYear();

    this.startAt = new Date(2018, month, day);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
    this.secondFormGroup1 = this._formBuilder.group({
      secondCtrl1: ''
    });

  }
  onChangeDate() {
    this.startAt = new Date(2019, 5, 22);
    this.matCalendar.updateTodaysDate()
    this.matCalendar.stateChanges.next();
  }
}
