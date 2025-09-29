import { BaseObject } from './baseobject';
import { Props } from './props';

export class NamedObject extends BaseObject {
  name: string;

  constructor(name: string, type: string, className: string, props: Props) {
    super(type, className, props);
    this.name = name;
  }
}
