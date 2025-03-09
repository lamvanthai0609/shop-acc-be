import { GeneralController } from '../general';
import { Image } from './image.entity';
import { ImageService } from './image.service';

export class ImageController extends GeneralController<Image> {
    constructor() {
        super(new ImageService());
    }
}
