import {
  transmittedByVectors,
  zoonoses,
  mycobacteria
} from '../transmission-types/';

const transmissionTypes = {
  byVectors: {
    ...transmittedByVectors,
    icon: 'byVectorsIcon'
  },
  zoonoses: {
    ...zoonoses,
    icon: 'zoonosesIcon'
  },
  mycobacteria: {
    ...mycobacteria,
    icon: 'mycobacteriaIcon'
  }
};

export {transmissionTypes};
