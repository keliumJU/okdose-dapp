import forwardArrowIcon from '../../assets/images/icons/forwardArrowIcon.svg';

function DisplayCardInformation () {
  return (
    <div className='w-96 h-28'>
      <div>
        <p className='text-lg not-itali text-indigo-700 font-bold'>
          N-Metil Glucamine
        </p>
        <div className='py-5 text-sm not-itali font-normal'>
          <p>Amp 1500 mg x 5ml (Sb5 + 405 mg)</p>
          <p>Dose Max: (20 mg/kg/day)</p>
        </div>
      </div>
      <div className='flex flex-row justify-end items-center text-sm not-itali font-normal mb-5'>
        <p>See more</p>
        <img className='pl-1' src={forwardArrowIcon} alt='icon-next' />
      </div>
      <hr className='divide-solid bg-gray-200 h-1' />
    </div>
  );
}

export default DisplayCardInformation;
