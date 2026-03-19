import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../../config/constantes';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  /**
   * Récupérer une image par défaut si j'ai une chaine vide ou qui
   * contient que des espaces
   * Sinon on retourne la chaine comme elle est
   * @param path
   * @returns
   */
  transform(path: string): string {
    return path.trim() ? path : APP_CONST.defaultImage;
  }

}
