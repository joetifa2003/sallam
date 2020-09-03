import Spec from '@/classes/Spec';
import Base from '@/classes/Base';
import { Type } from 'class-transformer';

enum ProductTypes {
  MOTOR = 'motor',
  TOLOMBA = 'tolomba',
  CABLE = 'cable',
  CONTROL_PANEL = 'control panel',
  GENERATOR = 'generator',
  GARBOX = 'garbox',
  PUMP = 'pump',
}

enum ProductStates {
  NEW = 'new',
  USED = 'used',
}

class Product extends Base {
  public type: ProductTypes;
  public name: string;
  public company: string;
  public state: ProductStates;

  @Type(() => Spec)
  public specs: Spec[];

  public images: string[];

  constructor(
    type: ProductTypes,
    name: string,
    company: string,
    state: ProductStates,
    specs: Spec[],
    images: string[],
  ) {
    super();
    this.type = type;
    this.name = name;
    this.company = company;
    this.state = state;
    this.specs = specs;
    this.images = images;
  }
}

export { Product, ProductTypes, ProductStates };
