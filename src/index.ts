import { AwsProvider } from './lib/providers/aws';
import { Props } from './lib/props';

async function main() {
  const awsProvider = new AwsProvider(new Props());
  console.log(awsProvider.toString());
}

main();
