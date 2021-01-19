import { Component, OnInit } from "@angular/core";
import { ListFilterPagination } from "@app/shared/components/list/filter/model/list.filter.pagination.model";
import { LoadingService } from "@app/shared/components/loading/services/loading.service";
import { ComicListModel, ComicModel } from "../../model/comic.model";
import { ComicService } from "../../services/comic.service";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.sass"],
})
export class ListPageComponent implements OnInit {

  public comics: ComicListModel = {
    limit: 10,
    offset: 0,
    total: 0,
    results: [],
  };

  public selectedComic: ComicModel = {
    description: null,
    id: null,
    imageURL: null,
    title: null,
  };

  public isDetailOpen: boolean = false;

  constructor(
    private comicsService: ComicService,
    private loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.getComics(this.comics.offset, this.comics.limit);
  }

  public selectComic(id: number): void {
    const selectedComic: ComicModel = (this.comics.results || []).find(
      (comic: ComicModel) => {
        return comic.id === id;
      }
    );
    if (!!selectedComic) {
      this.isDetailOpen = true;
      this.selectedComic = selectedComic;
    }
  }

  public closeDetails(): void {
    this.isDetailOpen = false;
  }

  public refreshSearch(data: ListFilterPagination): void {
    this.getComics(data.offset, data.limit);
  }

  private async getComics(offset: number, limit: number) {
    this.loadingService.show();
    try {
      this.comics = await this.comicsService.getAll(offset, limit).toPromise();
      console.log("Success!", this.comics);
    } catch (error) {
      console.error("Failed!", error);
      this.resetComics();
    } finally {
      this.loadingService.hide();
    }
  }

  private resetComics() {
    this.isDetailOpen = false;
    this.selectedComic = {
      description: null,
      id: null,
      imageURL: null,
      title: null,
    };

    this.comics = {
      limit: 10,
      offset: 0,
      total: 0,
      results: [],
    };
  }
}
