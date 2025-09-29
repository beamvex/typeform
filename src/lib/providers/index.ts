import { BaseObject } from '../baseobject';
import { Props } from '../props';

export class Provider extends BaseObject {
  constructor(className: string, props: Props) {
    super('provider', className, props);
  }
}
