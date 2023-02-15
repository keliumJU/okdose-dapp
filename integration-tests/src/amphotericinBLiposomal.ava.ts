import initContract from './helpers/initContract';
import {test} from './helpers/initTest';
import * as dotenv from 'dotenv';
import {join} from 'path';

dotenv.config({path: join(__dirname, '../../', '.env')});

const contractAccount = process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT as string;
const blockId = process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT_BLOCK_ID as string;
const contractMethod = process.env.CONTRACT_METHOD as string;

initContract({contractAccount, blockId});

test('It returns the correct type attributes', async (t) => {
  const {contract} = t.context.accounts;
  const {
    name,
    presentation,
    treatmentTime,
    weightDose,
    volumeDose,
    preparation,
    warning
  }: any = await contract.view(contractMethod, {
    weight: 20,
    prescriptionType: 'LCM2'
  });

  t.is(typeof name, 'string');
  t.is(typeof presentation, 'string');
  t.is(typeof treatmentTime, 'string');
  t.is(typeof weightDose[0], 'string');
  t.is(typeof volumeDose[0], 'string');
  t.is(typeof preparation, 'string');
  t.is(typeof warning, 'string');
});
