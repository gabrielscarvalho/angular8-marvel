
export interface ComicModel {
  id: number;
  title: string;
  description: string;
  imageURL: string;
}

export interface ComicListModel {
  offset: number;
  limit: number;
  total: number;
  results: ComicModel[]
}
