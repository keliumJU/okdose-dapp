const prescribeNMetilGlucamine = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.NMETIL_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);

const prescribeSodiumStibogluconate = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.STIBOGLUCONATE_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);

const prescribePentamidineIsethionate = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.PENTAMIDINE_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);

const prescribeMiltefosine = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.MILTEFOSINE_CONTRACT, process.env.CONTRACT_METHOD, { weight })
);

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
