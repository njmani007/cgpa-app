import React from 'react'

const test = () => {
  return (
    <div>
        function handleClick01()
    {
      setCtotal1(Number(cm11) + Number(cm12) + Number(cm13) + Number(cm14) + Number(cm15) + Number(cm16) + Number(cm17) + Number(cm18)); // set number to the state
      setGtotal1(Number(gm11) + Number(gm12) + Number(gm13) + Number(gm14) + Number(gm15) + Number(gm16) + Number(gm17) + Number(gm18)); // set number to the state
    
    
      setCGmark11(Number(cm11) * Number(gm11));
      setCGmark12(Number(cm12) * Number(gm12));
      setCGmark13(Number(cm13) * Number(gm13));
      setCGmark14(Number(cm14) * Number(gm14));
      setCGmark15(Number(cm15) * Number(gm15));
      setCGmark16(Number(cm16) * Number(gm16));
      setCGmark17(Number(cm17) * Number(gm17));
      setCGmark18(Number(cm18) * Number(gm18));
    
      setCGtotal1((Number(cm11) * Number(gm11)) + (Number(cm12) * Number(gm12)) + (Number(cm13) * Number(gm13)) + (Number(cm14) * Number(gm14)) + (Number(cm15) * Number(gm15)) + (Number(cm16) * Number(gm16)) + (Number(cm17) * Number(gm17)) + (Number(cm18) * Number(gm18))); // set number to the state
      
    
      setGPAtotal1(((Number(cm11) * Number(gm11)) + (Number(cm12) * Number(gm12)) + (Number(cm13) * Number(gm13)) + (Number(cm14) * Number(gm14)) + (Number(cm15) * Number(gm15)) + (Number(cm16) * Number(gm16)) + (Number(cm17) * Number(gm17)) + (Number(cm18) * Number(gm18))) / (Number(cm11) + Number(cm12) + Number(cm13) + Number(cm14) + Number(cm15) + Number(cm16) + Number(cm17) + Number(cm18))
      )
      
    }
    </div>
  )
}

export default test