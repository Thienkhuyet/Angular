import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-from1',
  templateUrl: './from1.component.html',
  styleUrls: ['./from1.component.scss']
})
export class From1Component implements OnInit {
@Input() secondFormGroup:FormGroup;
@Input() _formBuilder:FormBuilder;
  constructor() { 
  
  }

  ngOnInit() {
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ''
    // });
  }

}
