import { GeneralService } from '../general';
import { Category } from './category.entity';
import { CategoryModel } from './category.model';

export class CategoryService extends GeneralService<Category> {
    constructor() {
        super(new CategoryModel());
    }
}
