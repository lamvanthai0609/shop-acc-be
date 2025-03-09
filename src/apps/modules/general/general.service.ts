import { GeneralModel } from './general.model';

export class GeneralService<T> {
    private model: GeneralModel<T>;

    constructor(model: GeneralModel<T>) {
        this.model = model;
    }

    async find(): Promise<T[]> {
        return this.model.find();
    }

    async findById(id: number): Promise<T | null> {
        return this.model.findById(id);
    }

    async findByFields(
        fields: Partial<T>,
        type: 'AND' | 'OR' = 'AND'
    ): Promise<T[]> {
        return this.model.findByFields(fields, type);
    }

    async findOneByFields(
        fields: Partial<T>,
        type: 'AND' | 'OR' = 'AND'
    ): Promise<T | null> {
        return this.model.findOneByFields(fields, type);
    }

    async save(data: Partial<T>): Promise<number> {
        return this.model.save(data);
    }

    async update(id: number, data: Partial<T>): Promise<boolean> {
        return this.model.update(id, data);
    }

    async delete(id: number): Promise<boolean> {
        return this.model.delete(id);
    }
}
