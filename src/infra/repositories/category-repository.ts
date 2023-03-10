import { Category } from 'src/domain/entities/category';
import { CategoryType } from 'src/domain/types/category-type';
import { CategoryRepositoryInterface } from '../abstract/repositories/categoryRepositor-interface';

export class CategoryRepository implements CategoryRepositoryInterface {
  public create(categoryBody: CategoryType): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  public delete(categoryId: string, restaurantId: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  public getOne(categoryId: string, restaurantId: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  public getAll(restaurantId: string): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  public update(categoryBody: CategoryType): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
