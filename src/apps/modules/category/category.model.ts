import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { Category } from './category.entity';

export class CategoryModel extends GeneralModel<Category> {
    constructor() {
        super(Table.CATEGORY);
    }
}
