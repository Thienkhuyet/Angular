import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-from3',
  templateUrl: './from3.component.html',
  styleUrls: ['./from3.component.scss']
})
export class From3Component implements OnInit {
  froms:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.froms=this.fb.group({
      vuong:['']
    })
  }

}
