import { Component, OnInit } from '@angular/core';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass']
})
export class ListPageComponent implements OnInit {

  constructor(private comicsService: ComicService ) { }

  ngOnInit() {
    this.comicsService.getAll().subscribe((result: any) => {
      console.log('Success!', result);
    }, (error) => {
      console.error('Failed!', error);
    });
  }

}
