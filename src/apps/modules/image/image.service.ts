import { GeneralService } from '../general';
import { Image } from './image.entity';
import { ImageModel } from './image.model';

export class ImageService extends GeneralService<Image> {
    constructor() {
        super(new ImageModel());
    }
}
