import letter from '../images/newsletter.jpeg'
import { Btn3 } from './Btn'

export default function News() {
    const style = {
        backgroundImage : `url(${letter})`
    }
  return (
    <>
        
        <div className="h-[70vh] w-[100%] bg-cover bg-center my-[150px] rounded-[40px] flex justify-center items-center " style={style}>
            <div className=" w-1/2 text-7xl text-center text-white font-bold flex flex-wrap justify-center items-center">
            Suscribe To Our <br />
            Newsletter <br />
            <Btn3/>
            </div>
        </div>
    </>
  )
}
