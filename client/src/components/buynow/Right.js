import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
        <img src="https://www.kindpng.com/picc/m/475-4759660_guaranteed-safe-checkout-png-transparent-png.png" alt="safe" />
        <div className="cost_right">
            <p>free delivery is available</p>
            <span style={{color:"#565959"}}>select this option at checkout. details</span>
            <h3>Subtotal (1 items): <span style={{fontWeight: 700}}>50,999</span></h3>
            <button className="rightbuy_btn">checkout</button>
            <div className="emi">
                emi available
            </div>
        </div>
    </div>
  )
}

export default Right