export interface ComicImageDTO {
  path: string;
  extension: string;
}

export interface ComicResponseDTO {
  id: number;
  title: string;
  description: string;
  images: ComicImageDTO[],
  thumbnail: ComicImageDTO
}

export interface ComicsListResponseDTO {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicResponseDTO[];
}
