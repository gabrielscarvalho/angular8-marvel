
export interface ComicModel {
  id: number;
  title: string;
  description: string;
}

export interface ComicListModel {
  offset: number;
  limit: number;
  results: ComicModel[]
}
