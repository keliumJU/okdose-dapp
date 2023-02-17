import {
  transmittedByVectors,
  zoonoses,
  mycobacteria
} from '../transmission-types/';
import byVectorsIcon from '../../okdose-web/assets/images/icons/byVectorsIcon.svg';
import mycobacteriaIcon from '../../okdose-web/assets/images/icons/mycobacteriaIcon.svg';
import zoonosesIcon from '../../okdose-web/assets/images/icons/zoonosesIcon.svg';

const transmissionTypes = {
  byVectors: {
    name: transmittedByVectors.name,
    icon: byVectorsIcon,
    types: {
      leishmaniasis: transmittedByVectors.diseases.leishmaniasis
    }
  },
  zoonoses: {
    name: zoonoses.name,
    icon: zoonosesIcon,
    types: {}
  },
  mycobacteria: {
    name: mycobacteria.name,
    icon: mycobacteriaIcon,
    types: {}
  }
};

export {transmissionTypes};
