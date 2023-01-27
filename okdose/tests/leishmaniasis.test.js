import * as Leishmaniasis from "../transmissionTypes/transmittedByVectors/leishmaniasis";
import { NearInterface } from '../../okdoseweb/near/near-interface'
import { Wallet } from '../../okdoseweb/near/near-wallet'
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({path: join(__dirname, '../../', '.env')})


describe('Leishmaniasis smart contract prescription response check', () => {
  const wallet = new Wallet({ createAccessKeyFor: process.env.MAIN_ACCOUNT });
  let nearInterface;
  const weight = 100;

  beforeEach(async () => {
    await wallet.startUp();
    nearInterface = new NearInterface({ walletToUse: wallet });
  });

  test('It returns the correct keys translations for N-Metil Glucamine', async () => {
    const dose = await Leishmaniasis.prescribeNMetilGlucamine(nearInterface, weight)

    expect(dose.name).toBe("leishmaniasis.n_metil_glucamine.name");
    expect(dose.presentation).toBe("leishmaniasis.n_metil_glucamine.presentation");
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBe("leishmaniasis.n_metil_glucamine.via");
    expect(dose.frequency).toBe("leishmaniasis.n_metil_glucamine.frequency");
    expect(dose.treatmentTime).toBe("leishmaniasis.n_metil_glucamine.treatment_time");
    expect(dose.warning).toBe("leishmaniasis.n_metil_glucamine.warning");
  });

  test('It returns the correct keys translations for Sodium stibogluconato', async () => {
    const dose = await Leishmaniasis.prescribeSodiumStibogluconate(nearInterface, weight)

    expect(dose.name).toBe("leishmaniasis.sodium_stibogluconate.name");
    expect(dose.presentation).toBe("leishmaniasis.sodium_stibogluconate.presentation");
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBe("leishmaniasis.sodium_stibogluconate.via");
    expect(dose.frequency).toBe("leishmaniasis.sodium_stibogluconate.frequency");
    expect(dose.treatmentTime).toBe("leishmaniasis.sodium_stibogluconate.treatment_time");
    expect(dose.warning).toBe("leishmaniasis.sodium_stibogluconate.warning");
  });

  test('It returns the correct keys translations for Pentamidine isethionate', async () => {
    const dose = await Leishmaniasis.prescribePentamidineIsethionate(nearInterface, weight)

    expect(dose.name).toBe("leishmaniasis.pentamidine_isethionate.name");
    expect(dose.presentation).toBe("leishmaniasis.pentamidine_isethionate.presentation");
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBe("leishmaniasis.pentamidine_isethionate.via");
    expect(dose.frequency).toBe("leishmaniasis.pentamidine_isethionate.frequency");
    expect(dose.treatmentTime).toBe("leishmaniasis.pentamidine_isethionate.treatment_time");
    expect(dose.warning).toBe("leishmaniasis.pentamidine_isethionate.warning");
    expect(dose.preparation).toBe("leishmaniasis.pentamidine_isethionate.preparation");
  });

  test('It returns the correct keys translations for Miltefosine', async () => {
    const dose = await Leishmaniasis.prescribeMiltefosine(nearInterface, weight)

    expect(dose.name).toBe("leishmaniasis.miltefosine.name");
    expect(dose.presentation).toBe("leishmaniasis.miltefosine.presentation");
    expect(dose.weightDose).toBeDefined();
    expect(dose.frequency).toBe("leishmaniasis.miltefosine.frequency");
    expect(dose.treatmentTime).toBe("leishmaniasis.miltefosine.treatment_time");
    expect(dose.warning).toBe("leishmaniasis.miltefosine.warning_under_150_mg");
    expect(dose.note).toBe("leishmaniasis.miltefosine.note");
  });

  test('It returns the correct keys translations for Amphotericin B Liposomal', async () => {
    const dose = await Leishmaniasis.prescribeAmphotericinBLiposomal(nearInterface, weight, "LCM2")

    expect(dose.name).toBe("leishmaniasis.amphotericin_b_liposomal.name");
    expect(dose.presentation).toBe("leishmaniasis.amphotericin_b_liposomal.presentation");
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.treatmentTime).toBe("leishmaniasis.amphotericin_b_liposomal.treatment_time");
    expect(dose.warning).toBe("leishmaniasis.amphotericin_b_liposomal.warning");
    expect(dose.preparation).toBe("leishmaniasis.amphotericin_b_liposomal.preparation");
  });
});
