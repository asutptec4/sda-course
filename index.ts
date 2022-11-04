import { Client } from './src/client';

const shipmentCost = new Client()
  .prepareShipment(5)
  .setFromAddress('12292 4th Ave SE, Bellevue, Wa')
  .setFromZipCode('92021')
  .setToAddress('1313 Mockingbird Lane, Tulsa, OK')
  .setToZipCode('67721')
  .ship();

console.log(`Cost = ${shipmentCost}`);
