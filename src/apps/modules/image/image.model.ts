import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { Image } from './image.entity';

export class ImageModel extends GeneralModel<Image> {
    constructor() {
        super(Table.IMAGE);
    }
}
