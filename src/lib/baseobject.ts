import { Props } from './props';

/**
 * BaseObject is the base class for all Terraform objects.
 */
export class BaseObject {
  props: Props;
  /**
   * The type of the object.
   */
  type: string;

  /**
   * The class name of the object.
   */
  className: string;

  constructor(type: string, className: string, props: Props) {
    this.type = type;
    this.className = className;
    this.props = props;
  }

  protected declaration(): string {
    return `${this.type} "${this.className}"`;
  }

  public toString(): string {
    let output = this.declaration();

    output += ' {\n';
    output += this.props.toString();
    output += '}';

    return output;
  }
}
