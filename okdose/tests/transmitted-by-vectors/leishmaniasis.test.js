import * as Leishmaniasis from "../../transmission-types/transmitted-by-vectors/leishmaniasis";
import NearInterface from '../../../okdose-web/near/nearInterface'
import { Wallet } from '../../../okdose-web/near/nearWallet'
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({path: join(__dirname, '../../../', '.env')})

describe('Leishmaniasis smart contract prescription response check', () => {
  const wallet = new Wallet({ createAccessKeyFor: process.env.MAIN_ACCOUNT });
  let nearInterface;
  const weight = 100;

  beforeEach(async () => {
    await wallet.startUp();
    nearInterface = new NearInterface({ walletToUse: wallet });
  });

  test('It returns the correct properties for N-Metil Glucamine', async () => {
    const dose = await Leishmaniasis.prescribeNMetilGlucamine(nearInterface, weight)

    expect(typeof Leishmaniasis.prescribeNMetilGlucamine).toBe("function");
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
  });

  test('It returns the correct properties for Sodium stibogluconato', async () => {
    const dose = await Leishmaniasis.prescribeSodiumStibogluconate(nearInterface, weight)

    expect(typeof Leishmaniasis.prescribeSodiumStibogluconate).toBe("function");
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
  });

  test('It returns the correct properties for Pentamidine isethionate', async () => {
    const dose = await Leishmaniasis.prescribePentamidineIsethionate(nearInterface, weight)

    expect(typeof Leishmaniasis.prescribePentamidineIsethionate).toBe("function");
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
    expect(dose.preparation).toBeDefined();
  });

  test('It returns the correct properties for Miltefosine', async () => {
    const dose = await Leishmaniasis.prescribeMiltefosine(nearInterface, weight)

    expect(typeof Leishmaniasis.prescribeMiltefosine).toBe("function");
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
    expect(dose.note).toBeDefined();
  });

  test('It returns the correct properties for Amphotericin B Liposomal', async () => {
    const dose = await Leishmaniasis.prescribeAmphotericinBLiposomal(nearInterface, weight, "LCM2")

    expect(typeof Leishmaniasis.prescribeAmphotericinBLiposomal).toBe("function");
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
    expect(dose.preparation).toBeDefined();
  });
});
