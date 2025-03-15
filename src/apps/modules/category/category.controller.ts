import { GeneralController } from '../general';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

export class CategoryController extends GeneralController<Category> {
    constructor() {
        super(new CategoryService());
    }
}

export const categoryController = new CategoryController();
