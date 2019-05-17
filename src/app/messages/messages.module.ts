import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MatButtonModule, MatStepperModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageNewComponent } from './message-new/message-new.component';

@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
