import {
  transmittedByVectors,
  zoonoses,
  mycobacteria
} from '../transmission-types/';

const transmissionTypes = {
  byVectors: {
    name: transmittedByVectors.name,
    icon: 'byVectorsIcon',
    types: {
      leishmaniasis: transmittedByVectors.diseases.leishmaniasis
    }
  },
  zoonoses: {
    name: zoonoses.name,
    icon: 'zoonosesIcon',
    types: {}
  },
  mycobacteria: {
    name: mycobacteria.name,
    icon: 'mycobacteriaIcon',
    types: {}
  }
};

export {transmissionTypes};
