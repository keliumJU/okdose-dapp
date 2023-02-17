import * as transmittedByVectorsDiseases from './transmitted-by-vectors';

// Object representing "vector transmission" containing the diseases: leishmaniasis, chagas disease and malaria.
const transmittedByVectors = {
  name: 'transmission_types.transmitted_by_vectors',
  diseases: transmittedByVectorsDiseases
};

const zoonoses = {
  name: 'transmission_types.zoonoses',
  diseases: {}
};

const mycobacteria = {
  name: 'transmission_types.mycobacteria',
  diseases: {}
};

export {transmittedByVectors, zoonoses, mycobacteria};
