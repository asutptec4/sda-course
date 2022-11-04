import { Client } from './src/client';

console.log(
  new Client()
    .prepareShipment(16)
    .setFromAddress('12292 4th Ave SE, Bellevue, Wa')
    .setFromZipCode('92021')
    .setToAddress('1313 Mockingbird Lane, Tulsa, OK')
    .setToZipCode('67721')
    .ship()
);
