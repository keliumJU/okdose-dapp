import initContract from './helpers/initContract';
import {test} from './helpers/initTest';
import * as dotenv from 'dotenv';
import {join} from 'path';
dotenv.config({path: join(__dirname, '../../', '.env')});

const contractAccount = process.env.MILTEFOSINE_CONTRACT as string;
const blockId = process.env.MILTEFOSINE_BLOCK_ID as string;
const contractMethod = process.env.CONTRACT_METHOD as string;

initContract({contractAccount, blockId});

test('It returns the correct type attributes', async (t) => {
  const {contract} = t.context.accounts;
  const {
    name,
    presentation,
    weightDose,
    frequency,
    treatmentTime,
    warning,
    note
  }: any = await contract.view(contractMethod, {weight: 70});

  t.is(typeof name, 'string');
  t.is(typeof presentation, 'string');
  t.is(typeof weightDose[0], 'string');
  t.is(typeof frequency, 'string');
  t.is(typeof treatmentTime, 'string');
  t.is(typeof warning, 'string');
  t.is(typeof note, 'string');
});
