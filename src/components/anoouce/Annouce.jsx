import './annouce.css'
import Marquee from 'react-fast-marquee'
const Annouce = () => {
  return (
    <div className='annoucement'>
      <Marquee>
        <div className='annoucement-text text1'>
          <span> Super Deal! Free Shipping on Orders Over $50</span>
        </div>
        <div className='annoucement-text text2'>
          <span>get more sales</span>
          <span>Big X is the biggest online shop in Abuja</span>

        </div>
        <div className='annoucement-text text2'>
          <span>meet more customers</span>
        </div>
        </Marquee>
    </div>
  )
}

export default Annouce

