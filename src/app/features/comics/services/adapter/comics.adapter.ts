import { ComicListModel, ComicModel } from '../../model/comic.model';
import { ComicResponseDTO, ComicsListResponseDTO } from '../dtos/comics.list.response.dto';

const IMAGE_NOT_FOUND: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
const IMAGE_TYPE = '/landscape_incredible'

export class ComicsAdapter {
  public static listToModel(response: ComicsListResponseDTO): ComicListModel {
    const comicList: ComicListModel = {
      limit: response.limit,
      offset: response.offset,
      results: []
    };

    comicList.results = (response.results || []).map((comicResponseDTO: ComicResponseDTO) => {
      return ComicsAdapter.toModel(comicResponseDTO);
    });

    return comicList;
  }

  public static toModel(comicResponseDTO: ComicResponseDTO): ComicModel {
    const comic =  { 
      id: comicResponseDTO.id,
      title: comicResponseDTO.title,
      description: comicResponseDTO.description,
      imageURL: IMAGE_NOT_FOUND
    } as ComicModel;

    if (!!comicResponseDTO.thumbnail) {
      comic.imageURL = `${comicResponseDTO.thumbnail.path}${IMAGE_TYPE}.${comicResponseDTO.thumbnail.extension}`;
    }

    return comic;
  }
}