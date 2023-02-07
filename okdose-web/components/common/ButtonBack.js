function ButtonBack() {
  return (
    <button className="not-italic font-semibold text-base text-center text-white w-[185px] h-[50px]
      flex flex-row justify-center items-center px-6 gap-2 bg-sky-500 rounded"
    >
    <svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      <path d="M9 16.5L1.5 9L9 1.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
      Back
    </button>
  )
}

export default ButtonBack
