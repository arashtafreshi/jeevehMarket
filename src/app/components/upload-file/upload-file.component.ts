import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpClientModule } from '@angular/common/http';
import {Http, Request, RequestMethod} from '@angular/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  providers: [HttpClientModule]
})
export class UploadFileComponent implements OnInit {

  type:string;
  constructor(private req:Request) { }

  ngOnInit() {
    console.log(this.req.responseType);
    this.type = this.req.responseType.toString();
  }

}
