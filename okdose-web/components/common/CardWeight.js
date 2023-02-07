import ButtonBack from '../common/ButtonBack'
import ButtonWeight from '../common/ButtonWeight'
import TitleCardWeight from '../common/TitleCardWeight'

function CardWeight() {
  return (
    <div className="flex flex-col justify-center items-center pl-11 pr-5 pb-8 gap-5 isolate">
      <TitleCardWeight title={'Results'}/>
      <ButtonWeight />
      <ButtonBack />
    </div>
  )
}

export default CardWeight
