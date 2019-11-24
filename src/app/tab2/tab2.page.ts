import { SharedService } from './../service/shared.service';
import { DataService } from './../services/data.service';
import { Post } from './../models/Post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model = new Post();

  constructor(private data: DataService, private shared : SharedService) {

  }

  sendPost(){
    // validations
    if (!this.model.message && !this.model.imageURL) return;

    this.model.createdOn = new Date();
    this.model.from = this.shared.userName;

    console.log("Hey, look, you saved something. YAY!", this.model);

    // save the object

    this.data.savePost(this.model);

    // create new model (clear form)

    this.model = new Post();
  }

}
