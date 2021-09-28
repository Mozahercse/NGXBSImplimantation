import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-CompModal',
  templateUrl: './CompModal.component.html',
  styleUrls: ['./CompModal.component.css']
})
export class CompModalComponent implements OnInit {

  modalRef!: BsModalRef;
  message!: string;
  constructor(private modalService: BsModalService) {}
  config = {
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-sm'
  };
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
Close():void{
  this.modalRef.hide();
}
  ngOnInit() {
  }

}
