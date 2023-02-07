function CardInformationDisplay() {
  return (
    <div className="w-96 h-28">
      <div>
        <p className="text-lg not-itali text-indigo-700 font-bold">N-Metil Glucamine</p>
        <div className="py-5 text-sm not-itali font-normal">
          <p>Amp 1500 mg x 5ml (Sb5 + 405 mg)</p>
          <p>Dose Max: (20 mg/kg/day)</p>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center text-sm not-itali font-normal mb-5">
        <p>See more</p>
        <svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
          <path d="M1 1.5L8.5 9L1 16.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </div>
      <hr className="divide-solid bg-gray-200 h-1"/>
    </div>
  )
}

export default CardInformationDisplay
