export interface ComicResponseDTO {
  id: number;
  title: string;
  description: string;
}

export interface ComicsListResponseDTO {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicResponseDTO[];
}
