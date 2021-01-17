import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@app/shared/components/loading/services/loading.service';
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

  constructor(private comicsService: ComicService,
    private loadingService: LoadingService
    ) { }

  ngOnInit() {
    this.loadingService.show();
    this.comicsService.getAll(3, 50).subscribe((result: ComicListModel) => {
      this.loadingService.hide();
      this.comics = result; 
      console.log('Success!', result);
    }, (error) => {
      this.loadingService.hide();
      console.error('Failed!', error);
    });
  }

}
