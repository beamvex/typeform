import { Provider } from '..';
import { Props } from '../../props';

export class AwsProvider extends Provider {
  constructor(props: Props) {
    super('aws', props);
  }
}
