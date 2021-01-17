import { Component, OnInit } from '@angular/core';
import { ComicListModel } from '../../model/comic.model';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass']
})
export class ListPageComponent implements OnInit {

  public comics: ComicListModel = {
    limit: 10,
    offset: 0,
    results: []
  };

  constructor(private comicsService: ComicService ) { }

  ngOnInit() {
    this.comicsService.getAll(3, 50).subscribe((result: ComicListModel) => {
      this.comics = result; 
      console.log('Success!', result);
    }, (error) => {
      console.error('Failed!', error);
    });
  }

}
