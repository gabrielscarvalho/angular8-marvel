import { ComicListModel, ComicModel } from '../../model/comic.model';
import { ComicResponseDTO, ComicsListResponseDTO } from '../dtos/comics.list.response.dto';


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
    return  { 
      id: comicResponseDTO.id,
      title: comicResponseDTO.title,
      description: comicResponseDTO.description,
    } as ComicModel;
  }
}