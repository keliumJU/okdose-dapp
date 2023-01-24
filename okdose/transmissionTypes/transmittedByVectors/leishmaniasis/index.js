/**
 * Gets the translation keys and dosage of the smart contract N-Metil Glucamine.
 * @param {NearInterface} nearInterface Class that allows the connection to a near wallet.
 * @param {number} weight Patient's weight in kg to one decimal point
 * @returns {Prescription} It is an object that has the translation keys and the prescribed dosage.
 */
const prescribeNMetilGlucamine = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.NMETIL_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);

/**
 * Gets the translation keys and dosage of the smart contract Sodium stibogluconate.
 * @param {NearInterface} nearInterface Class that allows the connection to a near wallet.
 * @param {number} weight Patient's weight in kg to one decimal point
 * @returns {Prescription} It is an object that has the translation keys and the prescribed dosage.
 */
const prescribeSodiumStibogluconate = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.STIBOGLUCONATE_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);

/**
 * Gets the translation keys and dosage of the smart contract Pentamidine isethionate.
 * @param {NearInterface} nearInterface Class that allows the connection to a near wallet.
 * @param {number} weight Patient's weight in kg to one decimal point
 * @returns {Prescription} It is an object that has the translation keys and the prescribed dosage.
 */
const prescribePentamidineIsethionate = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.PENTAMIDINE_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);
/**
 * Gets the translation keys and dosage of the smart contract Miltefosine.
 * @param {NearInterface} nearInterface Class that allows the connection to a near wallet.
 * @param {number} weight Patient's weight in kg to one decimal point
 * @returns {Prescription} It is an object that has the translation keys and the prescribed dosage.
 */
const prescribeMiltefosine = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.MILTEFOSINE_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);

/**
 * Gets the translation keys and dosage of the smart contract Amphotericin B Liposomalr.
 * @param {NearInterface} nearInterface Class that allows the connection to a near wallet.
 * @param {number} weight Patient's weight in kg to one decimal point
 * @param {string} prescriptionType Type of prescription based on disease can be any of the following: LCM2, LCM3, LV3, LV4, where L = Leishmaniasis, C = Cutaneous, M = Mucocutaneous, V = Visceral and 2, 3, 4 are the concentration in mg/kg/day.
 * @returns {Prescription} It is an object that has the translation keys and the prescribed dosage.
 */
const prescribeAmphotericinBLiposomal = async (nearInterface, weight, prescriptionType) => (
  nearInterface.viewMethod(process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT, process.env.CONTRACT_METHOD, { weight, prescriptionType })
);

export {
  prescribeNMetilGlucamine,
  prescribeSodiumStibogluconate,
  prescribePentamidineIsethionate,
  prescribeMiltefosine,
  prescribeAmphotericinBLiposomal
};
