import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from2',
  templateUrl: './from2.component.html',
  styleUrls: ['./from2.component.scss']
})
export class From2Component implements OnInit {
  @Input() secondFormGroup1: FormGroup;
  @Input() _formBuilder: FormBuilder;

  constructor() {
    //  this._formBuilder=new  FormBuilder();
  }

  ngOnInit() {
    // this.secondFormGroup1 = this._formBuilder.group({
    //   secondCtrl1: ''
    // });
  }

}
