import initContract from './helpers/initContract';
import {test} from './helpers/initTest';
import * as dotenv from 'dotenv';
import {join} from 'path';
dotenv.config({path: join(__dirname, '../../', '.env')});

const contractAccount = process.env.PENTAMIDINE_CONTRACT as string;
const blockId = process.env.PENTAMIDINE_CONTRACT_BLOCK_ID as string;
const contractMethod = process.env.CONTRACT_METHOD as string;

initContract({contractAccount, blockId});

test('It returns the correct type attributes', async (t) => {
  const {contract} = t.context.accounts;
  const {
    name,
    presentation,
    weightDose,
    volumeDose,
    via,
    frequency,
    treatmentTime,
    preparation
  }: any = await contract.view(contractMethod, {weight: 5});

  t.is(typeof name, 'string');
  t.is(typeof presentation, 'string');
  t.is(typeof weightDose[0], 'string');
  t.is(typeof volumeDose[0], 'string');
  t.is(typeof via, 'string');
  t.is(typeof frequency, 'string');
  t.is(typeof treatmentTime, 'string');
  t.is(typeof preparation, 'string');
});
