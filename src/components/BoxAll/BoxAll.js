import React from 'react'
import { useState } from 'react';
import Carousel from "react-elastic-carousel"
import './BoxAll.css'

const BoxAll = () => {

    const breakPoints = [
        {width: 500, itemsToShow: 1, itemsToScroll: 1},
        {width: 768, itemsToShow: 2},
        {width: 1000, itemsToShow: 2}
    ]

    //sem 1 declaration
    const [cm11,setCmark11] = useState(0);
    const [cm12,setCmark12] = useState(0);
    const [cm13,setCmark13] = useState(0);
    const [cm14,setCmark14] = useState(0);
    const [cm15,setCmark15] = useState(0);
    const [cm16,setCmark16] = useState(0);
    const [cm17,setCmark17] = useState(0);
    const [cm18,setCmark18] = useState(0);
    const [CT1,setCtotal1] = useState(0);
    

    
    const [gm11,setGmark11] = useState(0);
    const [gm12,setGmark12] = useState(0);
    const [gm13,setGmark13] = useState(0);
    const [gm14,setGmark14] = useState(0);
    const [gm15,setGmark15] = useState(0);
    const [gm16,setGmark16] = useState(0);
    const [gm17,setGmark17] = useState(0);
    const [gm18,setGmark18] = useState(0);
    const [GT1,setGtotal1] = useState(0);

    const [cgm11,setCGmark11] = useState(0);
    const [cgm12,setCGmark12] = useState(0);
    const [cgm13,setCGmark13] = useState(0);
    const [cgm14,setCGmark14] = useState(0);
    const [cgm15,setCGmark15] = useState(0);
    const [cgm16,setCGmark16] = useState(0);
    const [cgm17,setCGmark17] = useState(0);
    const [cgm18,setCGmark18] = useState(0);
    const [CGT1,setCGtotal1] = useState(0);
    const [GPA01,setGPAtotal1] = useState(0);

        const n01 =GPA01.toFixed(4);


    //sem 2 declaration

    const [cm21,setCmark21] = useState(0);
    const [cm22,setCmark22] = useState(0);
    const [cm23,setCmark23] = useState(0);
    const [cm24,setCmark24] = useState(0);
    const [cm25,setCmark25] = useState(0);
    const [cm26,setCmark26] = useState(0);
    const [cm27,setCmark27] = useState(0);
    const [cm28,setCmark28] = useState(0);
    const [CT2,setCtotal2] = useState(0);
    

    
    const [gm21,setGmark21] = useState(0);
    const [gm22,setGmark22] = useState(0);
    const [gm23,setGmark23] = useState(0);
    const [gm24,setGmark24] = useState(0);
    const [gm25,setGmark25] = useState(0);
    const [gm26,setGmark26] = useState(0);
    const [gm27,setGmark27] = useState(0);
    const [gm28,setGmark28] = useState(0);
    const [GT2,setGtotal2] = useState(0);

    const [cgm21,setCGmark21] = useState(0);
    const [cgm22,setCGmark22] = useState(0);
    const [cgm23,setCGmark23] = useState(0);
    const [cgm24,setCGmark24] = useState(0);
    const [cgm25,setCGmark25] = useState(0);
    const [cgm26,setCGmark26] = useState(0);
    const [cgm27,setCGmark27] = useState(0);
    const [cgm28,setCGmark28] = useState(0);
    const [CGT2,setCGtotal2] = useState(0);
    const [GPA02,setGPAtotal2] = useState(0);

        const n02 =GPA02.toFixed(4);

    //sem 3 declaration

    const [cm31,setCmark31] = useState(0);
    const [cm32,setCmark32] = useState(0);
    const [cm33,setCmark33] = useState(0);
    const [cm34,setCmark34] = useState(0);
    const [cm35,setCmark35] = useState(0);
    const [cm36,setCmark36] = useState(0);
    const [cm37,setCmark37] = useState(0);
    const [cm38,setCmark38] = useState(0);
    const [CT3,setCtotal3] = useState(0);
    
  
    
    const [gm31,setGmark31] = useState(0);
    const [gm32,setGmark32] = useState(0);
    const [gm33,setGmark33] = useState(0);
    const [gm34,setGmark34] = useState(0);
    const [gm35,setGmark35] = useState(0);
    const [gm36,setGmark36] = useState(0);
    const [gm37,setGmark37] = useState(0);
    const [gm38,setGmark38] = useState(0);
    const [GT3,setGtotal3] = useState(0);
    
    const [cgm31,setCGmark31] = useState(0);
    const [cgm32,setCGmark32] = useState(0);
    const [cgm33,setCGmark33] = useState(0);
    const [cgm34,setCGmark34] = useState(0);
    const [cgm35,setCGmark35] = useState(0);
    const [cgm36,setCGmark36] = useState(0);
    const [cgm37,setCGmark37] = useState(0);
    const [cgm38,setCGmark38] = useState(0);
    const [CGT3,setCGtotal3] = useState(0);
    const [GPA03,setGPAtotal3] = useState(0);
    
        const n03 =GPA03.toFixed(4);

    //sem 4 declaration

    const [cm41,setCmark41] = useState(0);
    const [cm42,setCmark42] = useState(0);
    const [cm43,setCmark43] = useState(0);
    const [cm44,setCmark44] = useState(0);
    const [cm45,setCmark45] = useState(0);
    const [cm46,setCmark46] = useState(0);
    const [cm47,setCmark47] = useState(0);
    const [cm48,setCmark48] = useState(0);
    const [CT4,setCtotal4] = useState(0);
    
  
    
    const [gm41,setGmark41] = useState(0);
    const [gm42,setGmark42] = useState(0);
    const [gm43,setGmark43] = useState(0);
    const [gm44,setGmark44] = useState(0);
    const [gm45,setGmark45] = useState(0);
    const [gm46,setGmark46] = useState(0);
    const [gm47,setGmark47] = useState(0);
    const [gm48,setGmark48] = useState(0);
    const [GT4,setGtotal4] = useState(0);
    
    const [cgm41,setCGmark41] = useState(0);
    const [cgm42,setCGmark42] = useState(0);
    const [cgm43,setCGmark43] = useState(0);
    const [cgm44,setCGmark44] = useState(0);
    const [cgm45,setCGmark45] = useState(0);
    const [cgm46,setCGmark46] = useState(0);
    const [cgm47,setCGmark47] = useState(0);
    const [cgm48,setCGmark48] = useState(0);
    const [CGT4,setCGtotal4] = useState(0);
    const [GPA04,setGPAtotal4] = useState(0);
    
        const n04 =GPA04.toFixed(4);

    //sem 5 declaration

    const [cm51,setCmark51] = useState(0);
    const [cm52,setCmark52] = useState(0);
    const [cm53,setCmark53] = useState(0);
    const [cm54,setCmark54] = useState(0);
    const [cm55,setCmark55] = useState(0);
    const [cm56,setCmark56] = useState(0);
    const [cm57,setCmark57] = useState(0);
    const [cm58,setCmark58] = useState(0);
    const [CT5,setCtotal5] = useState(0);
    
  
    
    const [gm51,setGmark51] = useState(0);
    const [gm52,setGmark52] = useState(0);
    const [gm53,setGmark53] = useState(0);
    const [gm54,setGmark54] = useState(0);
    const [gm55,setGmark55] = useState(0);
    const [gm56,setGmark56] = useState(0);
    const [gm57,setGmark57] = useState(0);
    const [gm58,setGmark58] = useState(0);
    const [GT5,setGtotal5] = useState(0);
    
    const [cgm51,setCGmark51] = useState(0);
    const [cgm52,setCGmark52] = useState(0);
    const [cgm53,setCGmark53] = useState(0);
    const [cgm54,setCGmark54] = useState(0);
    const [cgm55,setCGmark55] = useState(0);
    const [cgm56,setCGmark56] = useState(0);
    const [cgm57,setCGmark57] = useState(0);
    const [cgm58,setCGmark58] = useState(0);
    const [CGT5,setCGtotal5] = useState(0);
    const [GPA05,setGPAtotal5] = useState(0);
    
        const n05 =GPA05.toFixed(4);
    
    //sem 6 declaration

    const [cm61,setCmark61] = useState(0);
    const [cm62,setCmark62] = useState(0);
    const [cm63,setCmark63] = useState(0);
    const [cm64,setCmark64] = useState(0);
    const [cm65,setCmark65] = useState(0);
    const [cm66,setCmark66] = useState(0);
    const [cm67,setCmark67] = useState(0);
    const [cm68,setCmark68] = useState(0);
    const [CT6,setCtotal6] = useState(0);
    
  
    
    const [gm61,setGmark61] = useState(0);
    const [gm62,setGmark62] = useState(0);
    const [gm63,setGmark63] = useState(0);
    const [gm64,setGmark64] = useState(0);
    const [gm65,setGmark65] = useState(0);
    const [gm66,setGmark66] = useState(0);
    const [gm67,setGmark67] = useState(0);
    const [gm68,setGmark68] = useState(0);
    const [GT6,setGtotal6] = useState(0);
    
    const [cgm61,setCGmark61] = useState(0);
    const [cgm62,setCGmark62] = useState(0);
    const [cgm63,setCGmark63] = useState(0);
    const [cgm64,setCGmark64] = useState(0);
    const [cgm65,setCGmark65] = useState(0);
    const [cgm66,setCGmark66] = useState(0);
    const [cgm67,setCGmark67] = useState(0);
    const [cgm68,setCGmark68] = useState(0);
    const [CGT6,setCGtotal6] = useState(0);
    const [GPA06,setGPAtotal6] = useState(0);
    
        const n06 =GPA06.toFixed(4);
    
    //sem 7 declaration

    const [cm71,setCmark71] = useState(0);
    const [cm72,setCmark72] = useState(0);
    const [cm73,setCmark73] = useState(0);
    const [cm74,setCmark74] = useState(0);
    const [cm75,setCmark75] = useState(0);
    const [cm76,setCmark76] = useState(0);
    const [cm77,setCmark77] = useState(0);
    const [cm78,setCmark78] = useState(0);
    const [CT7,setCtotal7] = useState(0);
    
  
    
    const [gm71,setGmark71] = useState(0);
    const [gm72,setGmark72] = useState(0);
    const [gm73,setGmark73] = useState(0);
    const [gm74,setGmark74] = useState(0);
    const [gm75,setGmark75] = useState(0);
    const [gm76,setGmark76] = useState(0);
    const [gm77,setGmark77] = useState(0);
    const [gm78,setGmark78] = useState(0);
    const [GT7,setGtotal7] = useState(0);
    
    const [cgm71,setCGmark71] = useState(0);
    const [cgm72,setCGmark72] = useState(0);
    const [cgm73,setCGmark73] = useState(0);
    const [cgm74,setCGmark74] = useState(0);
    const [cgm75,setCGmark75] = useState(0);
    const [cgm76,setCGmark76] = useState(0);
    const [cgm77,setCGmark77] = useState(0);
    const [cgm78,setCGmark78] = useState(0);
    const [CGT7,setCGtotal7] = useState(0);
    const [GPA07,setGPAtotal7] = useState(0);
    
        const n07 =GPA07.toFixed(4);
    
    //sem 8 declaration

    const [cm81,setCmark81] = useState(0);
    const [cm82,setCmark82] = useState(0);
    const [cm83,setCmark83] = useState(0);
    const [cm84,setCmark84] = useState(0);
    const [cm85,setCmark85] = useState(0);
    const [cm86,setCmark86] = useState(0);
    const [cm87,setCmark87] = useState(0);
    const [cm88,setCmark88] = useState(0);
    const [CT8,setCtotal8] = useState(0);
    
  
    
    const [gm81,setGmark81] = useState(0);
    const [gm82,setGmark82] = useState(0);
    const [gm83,setGmark83] = useState(0);
    const [gm84,setGmark84] = useState(0);
    const [gm85,setGmark85] = useState(0);
    const [gm86,setGmark86] = useState(0);
    const [gm87,setGmark87] = useState(0);
    const [gm88,setGmark88] = useState(0);
    const [GT8,setGtotal8] = useState(0);
    
    const [cgm81,setCGmark81] = useState(0);
    const [cgm82,setCGmark82] = useState(0);
    const [cgm83,setCGmark83] = useState(0);
    const [cgm84,setCGmark84] = useState(0);
    const [cgm85,setCGmark85] = useState(0);
    const [cgm86,setCGmark86] = useState(0);
    const [cgm87,setCGmark87] = useState(0);
    const [cgm88,setCGmark88] = useState(0);
    const [CGT8,setCGtotal8] = useState(0);
    const [GPA08,setGPAtotal8] = useState(0);
    
        const n08 =GPA08.toFixed(4);


    // Total declaration
    const [allGtotal,setAllGtotal] = useState(0);
    const [allCGtotal,setAllCGtotal] = useState(0);
    const [tot,setTot] = useState(0);
    const at = tot.toFixed(4);

    
    //declaration end




    //sem 1 function
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
      
    
      setGPAtotal1(((Number(cm11) * Number(gm11)) + (Number(cm12) * Number(gm12)) + (Number(cm13) * Number(gm13)) + (Number(cm14) * Number(gm14)) + (Number(cm15) * Number(gm15)) + (Number(cm16) * Number(gm16)) + (Number(cm17) * Number(gm17)) + (Number(cm18) * Number(gm18))) / (Number(gm11) + Number(gm12) + Number(gm13) + Number(gm14) + Number(gm15) + Number(gm16) + Number(gm17) + Number(gm18))
      )
      
    }

    //sem 2 function

    function handleClick02()
    {
    setCtotal2(Number(cm21) + Number(cm22) + Number(cm23) + Number(cm24) + Number(cm25) + Number(cm26) + Number(cm27) + Number(cm28)); // set number to the state
    setGtotal2(Number(gm21) + Number(gm22) + Number(gm23) + Number(gm24) + Number(gm25) + Number(gm26) + Number(gm27) + Number(gm28)); // set number to the state


    setCGmark21(Number(cm21) * Number(gm21));
    setCGmark22(Number(cm22) * Number(gm22));
    setCGmark23(Number(cm23) * Number(gm23));
    setCGmark24(Number(cm24) * Number(gm24));
    setCGmark25(Number(cm25) * Number(gm25));
    setCGmark26(Number(cm26) * Number(gm26));
    setCGmark27(Number(cm27) * Number(gm27));
    setCGmark28(Number(cm28) * Number(gm28));

    setCGtotal2((Number(cm21) * Number(gm21)) + (Number(cm22) * Number(gm22)) + (Number(cm23) * Number(gm23)) + (Number(cm24) * Number(gm24)) + (Number(cm25) * Number(gm25)) + (Number(cm26) * Number(gm26)) + (Number(cm27) * Number(gm27)) + (Number(cm28) * Number(gm28))); // set number to the state
    

    setGPAtotal2(((Number(cm21) * Number(gm21)) + (Number(cm22) * Number(gm22)) + (Number(cm23) * Number(gm23)) + (Number(cm24) * Number(gm24)) + (Number(cm25) * Number(gm25)) + (Number(cm26) * Number(gm26)) + (Number(cm27) * Number(gm27)) + (Number(cm28) * Number(gm28))) / (Number(gm21) + Number(gm22) + Number(gm23) + Number(gm24) + Number(gm25) + Number(gm26) + Number(gm27) + Number(gm28))
    )
    
    }
    //sem 3 function

    function handleClick03()
  {
    setCtotal3(Number(cm31) + Number(cm32) + Number(cm33) + Number(cm34) + Number(cm35) + Number(cm36) + Number(cm37) + Number(cm38)); // set number to the state
    setGtotal3(Number(gm31) + Number(gm32) + Number(gm33) + Number(gm34) + Number(gm35) + Number(gm36) + Number(gm37) + Number(gm38)); // set number to the state
  
  
    setCGmark31(Number(cm31) * Number(gm31));
    setCGmark32(Number(cm32) * Number(gm32));
    setCGmark33(Number(cm33) * Number(gm33));
    setCGmark34(Number(cm34) * Number(gm34));
    setCGmark35(Number(cm35) * Number(gm35));
    setCGmark36(Number(cm36) * Number(gm36));
    setCGmark37(Number(cm37) * Number(gm37));
    setCGmark38(Number(cm38) * Number(gm38));
  
    setCGtotal3((Number(cm31) * Number(gm31)) + (Number(cm32) * Number(gm32)) + (Number(cm33) * Number(gm33)) + (Number(cm34) * Number(gm34)) + (Number(cm35) * Number(gm35)) + (Number(cm36) * Number(gm36)) + (Number(cm37) * Number(gm37)) + (Number(cm38) * Number(gm38))); // set number to the state
    
  
    setGPAtotal3(((Number(cm31) * Number(gm31)) + (Number(cm32) * Number(gm32)) + (Number(cm33) * Number(gm33)) + (Number(cm34) * Number(gm34)) + (Number(cm35) * Number(gm35)) + (Number(cm36) * Number(gm36)) + (Number(cm37) * Number(gm37)) + (Number(cm38) * Number(gm38))) / (Number(gm31) + Number(gm32) + Number(gm33) + Number(gm34) + Number(gm35) + Number(gm36) + Number(gm37) + Number(gm38))
    )
    
  }
    //sem 4 function

    function handleClick04()
  {
    setCtotal4(Number(cm41) + Number(cm42) + Number(cm43) + Number(cm44) + Number(cm45) + Number(cm46) + Number(cm47) + Number(cm48)); // set number to the state
    setGtotal4(Number(gm41) + Number(gm42) + Number(gm43) + Number(gm44) + Number(gm45) + Number(gm46) + Number(gm47) + Number(gm48)); // set number to the state
  
  
    setCGmark41(Number(cm41) * Number(gm41));
    setCGmark42(Number(cm42) * Number(gm42));
    setCGmark43(Number(cm43) * Number(gm43));
    setCGmark44(Number(cm44) * Number(gm44));
    setCGmark45(Number(cm45) * Number(gm45));
    setCGmark46(Number(cm46) * Number(gm46));
    setCGmark47(Number(cm47) * Number(gm47));
    setCGmark48(Number(cm48) * Number(gm48));
  
    setCGtotal4((Number(cm41) * Number(gm41)) + (Number(cm42) * Number(gm42)) + (Number(cm43) * Number(gm43)) + (Number(cm44) * Number(gm44)) + (Number(cm45) * Number(gm45)) + (Number(cm46) * Number(gm46)) + (Number(cm47) * Number(gm47)) + (Number(cm48) * Number(gm48))); // set number to the state
    
  
    setGPAtotal4(((Number(cm41) * Number(gm41)) + (Number(cm42) * Number(gm42)) + (Number(cm43) * Number(gm43)) + (Number(cm44) * Number(gm44)) + (Number(cm45) * Number(gm45)) + (Number(cm46) * Number(gm46)) + (Number(cm47) * Number(gm47)) + (Number(cm48) * Number(gm48))) / (Number(gm41) + Number(gm42) + Number(gm43) + Number(gm44) + Number(gm45) + Number(gm46) + Number(gm47) + Number(gm48))
    )
    
  }


    //sem 5 function

    function handleClick05()
  {
    setCtotal5(Number(cm51) + Number(cm52) + Number(cm53) + Number(cm54) + Number(cm55) + Number(cm56) + Number(cm57) + Number(cm58)); // set number to the state
    setGtotal5(Number(gm51) + Number(gm52) + Number(gm53) + Number(gm54) + Number(gm55) + Number(gm56) + Number(gm57) + Number(gm58)); // set number to the state
  
  
    setCGmark51(Number(cm51) * Number(gm51));
    setCGmark52(Number(cm52) * Number(gm52));
    setCGmark53(Number(cm53) * Number(gm53));
    setCGmark54(Number(cm54) * Number(gm54));
    setCGmark55(Number(cm55) * Number(gm55));
    setCGmark56(Number(cm56) * Number(gm56));
    setCGmark57(Number(cm57) * Number(gm57));
    setCGmark58(Number(cm58) * Number(gm58));
  
    setCGtotal5((Number(cm51) * Number(gm51)) + (Number(cm52) * Number(gm52)) + (Number(cm53) * Number(gm53)) + (Number(cm54) * Number(gm54)) + (Number(cm55) * Number(gm55)) + (Number(cm56) * Number(gm56)) + (Number(cm57) * Number(gm57)) + (Number(cm58) * Number(gm58))); // set number to the state
    
  
    setGPAtotal5(((Number(cm51) * Number(gm51)) + (Number(cm52) * Number(gm52)) + (Number(cm53) * Number(gm53)) + (Number(cm54) * Number(gm54)) + (Number(cm55) * Number(gm55)) + (Number(cm56) * Number(gm56)) + (Number(cm57) * Number(gm57)) + (Number(cm58) * Number(gm58))) / (Number(gm51) + Number(gm52) + Number(gm53) + Number(gm54) + Number(gm55) + Number(gm56) + Number(gm57) + Number(gm58))
    )
    
  }
    //sem 6 function

    function handleClick06()
  {
    setCtotal6(Number(cm61) + Number(cm62) + Number(cm63) + Number(cm64) + Number(cm65) + Number(cm66) + Number(cm67) + Number(cm68)); // set number to the state
    setGtotal6(Number(gm61) + Number(gm62) + Number(gm63) + Number(gm64) + Number(gm65) + Number(gm66) + Number(gm67) + Number(gm68)); // set number to the state
  
  
    setCGmark61(Number(cm61) * Number(gm61));
    setCGmark62(Number(cm62) * Number(gm62));
    setCGmark63(Number(cm63) * Number(gm63));
    setCGmark64(Number(cm64) * Number(gm64));
    setCGmark65(Number(cm65) * Number(gm65));
    setCGmark66(Number(cm66) * Number(gm66));
    setCGmark67(Number(cm67) * Number(gm67));
    setCGmark68(Number(cm68) * Number(gm68));
  
    setCGtotal6((Number(cm61) * Number(gm61)) + (Number(cm62) * Number(gm62)) + (Number(cm63) * Number(gm63)) + (Number(cm64) * Number(gm64)) + (Number(cm65) * Number(gm65)) + (Number(cm66) * Number(gm66)) + (Number(cm67) * Number(gm67)) + (Number(cm68) * Number(gm68))); // set number to the state
    
  
    setGPAtotal6(((Number(cm61) * Number(gm61)) + (Number(cm62) * Number(gm62)) + (Number(cm63) * Number(gm63)) + (Number(cm64) * Number(gm64)) + (Number(cm65) * Number(gm65)) + (Number(cm66) * Number(gm66)) + (Number(cm67) * Number(gm67)) + (Number(cm68) * Number(gm68))) / (Number(gm61) + Number(gm62) + Number(gm63) + Number(gm64) + Number(gm65) + Number(gm66) + Number(gm67) + Number(gm68))
    )
    
  }
    //sem 7 function

    function handleClick07()
  {
    setCtotal7(Number(cm71) + Number(cm72) + Number(cm73) + Number(cm74) + Number(cm75) + Number(cm76) + Number(cm77) + Number(cm78)); // set number to the state
    setGtotal7(Number(gm71) + Number(gm72) + Number(gm73) + Number(gm74) + Number(gm75) + Number(gm76) + Number(gm77) + Number(gm78)); // set number to the state
  
  
    setCGmark71(Number(cm71) * Number(gm71));
    setCGmark72(Number(cm72) * Number(gm72));
    setCGmark73(Number(cm73) * Number(gm73));
    setCGmark74(Number(cm74) * Number(gm74));
    setCGmark75(Number(cm75) * Number(gm75));
    setCGmark76(Number(cm76) * Number(gm76));
    setCGmark77(Number(cm77) * Number(gm77));
    setCGmark78(Number(cm78) * Number(gm78));
  
    setCGtotal7((Number(cm71) * Number(gm71)) + (Number(cm72) * Number(gm72)) + (Number(cm73) * Number(gm73)) + (Number(cm74) * Number(gm74)) + (Number(cm75) * Number(gm75)) + (Number(cm76) * Number(gm76)) + (Number(cm77) * Number(gm77)) + (Number(cm78) * Number(gm78))); // set number to the state
    
  
    setGPAtotal7(((Number(cm71) * Number(gm71)) + (Number(cm72) * Number(gm72)) + (Number(cm73) * Number(gm73)) + (Number(cm74) * Number(gm74)) + (Number(cm75) * Number(gm75)) + (Number(cm76) * Number(gm76)) + (Number(cm77) * Number(gm77)) + (Number(cm78) * Number(gm78))) / (Number(gm71) + Number(gm72) + Number(gm73) + Number(gm74) + Number(gm75) + Number(gm76) + Number(gm77) + Number(gm78))
    )
    
  }
    //sem 8 function

    function handleClick08()
  {
    setCtotal8(Number(cm81) + Number(cm82) + Number(cm83) + Number(cm84) + Number(cm85) + Number(cm86) + Number(cm87) + Number(cm88)); // set number to the state
    setGtotal8(Number(gm81) + Number(gm82) + Number(gm83) + Number(gm84) + Number(gm85) + Number(gm86) + Number(gm87) + Number(gm88)); // set number to the state
  
  
    setCGmark81(Number(cm81) * Number(gm81));
    setCGmark82(Number(cm82) * Number(gm82));
    setCGmark83(Number(cm83) * Number(gm83));
    setCGmark84(Number(cm84) * Number(gm84));
    setCGmark85(Number(cm85) * Number(gm85));
    setCGmark86(Number(cm86) * Number(gm86));
    setCGmark87(Number(cm87) * Number(gm87));
    setCGmark88(Number(cm88) * Number(gm88));
  
    setCGtotal8((Number(cm81) * Number(gm81)) + (Number(cm82) * Number(gm82)) + (Number(cm83) * Number(gm83)) + (Number(cm84) * Number(gm84)) + (Number(cm85) * Number(gm85)) + (Number(cm86) * Number(gm86)) + (Number(cm87) * Number(gm87)) + (Number(cm88) * Number(gm88))); // set number to the state
    
  
    setGPAtotal8(((Number(cm81) * Number(gm81)) + (Number(cm82) * Number(gm82)) + (Number(cm83) * Number(gm83)) + (Number(cm84) * Number(gm84)) + (Number(cm85) * Number(gm85)) + (Number(cm86) * Number(gm86)) + (Number(cm87) * Number(gm87)) + (Number(cm88) * Number(gm88))) / (Number(gm81) + Number(gm82) + Number(gm83) + Number(gm84) + Number(gm85) + Number(gm86) + Number(gm87) + Number(gm88))
    )
    
  }

  //CGPA Total Function calculation

  function totalclick() 
  {
      setAllGtotal(Number(GT1) + Number(GT2) + Number(GT3) + Number(GT4) + Number(GT5) + Number(GT6) + Number(GT7) + Number(GT8))
      setAllCGtotal(Number(CGT1) + Number(CGT2) + Number(CGT3) + Number(CGT4) + Number(CGT5) + Number(CGT6) + Number(CGT7) + Number(CGT8))
      setTot((Number(CGT1) + Number(CGT2) + Number(CGT3) + Number(CGT4) + Number(CGT5) + Number(CGT6) + Number(CGT7) + Number(CGT8))/(Number(GT1) + Number(GT2) + Number(GT3) + Number(GT4) + Number(GT5) + Number(GT6) + Number(GT7) + Number(GT8)))
  }




  return (
    <div>

        
<div className="row">
            <div className="col-12" style={{backgroundColor:'#ccc'}}>
              <div className="app">
                <Carousel
                easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={1000}
                breakPoints={breakPoints}
                itemsToScroll={2}>

                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem1*/}
                                <div className='box'>
                                <div className='contain'>
                                        <div className='b-box'>
                                            <div className='sem-box'>
                                                <span className='sem'>SEMESTE : 01</span>
                                            </div>
                                        </div>
                                        <div className='b-box'>
                                            <div className='t-head'><p className='t-span'>MARKS</p></div>
                                            <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                            <div className='t-head'><p className='t-span'>GRADE</p></div>
                                            <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK1 : </span>
                                                <input type="text" name="setCmark11" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark11(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark11" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark11(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark11" step="any" className="m-box" value={cgm11} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK2 : </span>
                                                <input type="text" name="setCmark12" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark12(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark12" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark12(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark12" step="any" className="m-box" value={cgm12} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK3 : </span>
                                                <input type="text" name="setCmark13" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark13(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark13" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark13(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark13" step="any" className="m-box" value={cgm13} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK4 : </span>
                                                <input type="text" name="setCmark14" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark14(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark14" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark14(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark14" step="any" className="m-box" value={cgm14} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK5 : </span>
                                                <input type="text" name="setCmark15" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark15(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark15" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark15(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark15" step="any" className="m-box" value={cgm15} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK6 : </span>
                                                <input type="text" name="setCmark16" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark16(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark16" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark16(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark16" step="any" className="m-box" value={cgm16} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK7 : </span>
                                                <input type="text" name="setCmark17" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark17(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark17" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark17(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark17" step="any" className="m-box" value={cgm17} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK8 : </span>
                                                <input type="text" name="setCmark18" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark18(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark18" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark18(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark18" step="any" className="m-box" value={cgm18} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>TOTAL : </span>
                                                <input type="text" name ="total_CT1" step="any" className='m-box' value={ CT1 } readOnly/>
                                                <input type="text" name ="total_GT1" step="any" className='m-box' value={ GT1 } readOnly/>
                                                <input type="text" name ="total_CGT1" step="any" className='m-box' value={ CGT1 } readOnly/>
                                                
                                        </div>
                                            <div className='a-button'>
                                            <button className="button-c" onClick={handleClick01}>Click</button>
                                            </div>
                                        <div className='total'>
                                            <span className='gpa'>GPA :</span>

                                            <input type="text" name="setGPAtotal1" step="any" className="t-box" value={n01} readOnly
                                            />

                                        </div>
                                    </div>
                                </div>  {/*end sem 1*/}
                            </div>
                        </div>
                    </div>

                  </div>


                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem2*/}
                                <div className='box'>
                                
                                <div className='contain'>
                                        <div className='b-box'>
                                            <div className='sem-box'>
                                                <span className='sem'>SEMESTER : 02</span>
                                            </div>
                                        </div>
                                        <div className='b-box'>
                                            <div className='t-head'><p className='t-span'>MARKS</p></div>
                                            <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                            <div className='t-head'><p className='t-span'>GRADE</p></div>
                                            <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK1 : </span>
                                                <input type="text" name="setCmark21" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark21(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark21" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark21(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark21" step="any" className="m-box" value={cgm21} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK2 : </span>
                                                <input type="text" name="setCmark22" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark22(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark22" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark22(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark22" step="any" className="m-box" value={cgm22} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK3 : </span>
                                                <input type="text" name="setCmark23" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark23(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark23" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark23(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark23" step="any" className="m-box" value={cgm23} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK4 : </span>
                                                <input type="text" name="setCmark24" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark24(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark24" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark24(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark24" step="any" className="m-box" value={cgm24} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK4 : </span>
                                                <input type="text" name="setCmark25" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark25(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark25" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark25(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark25" step="any" className="m-box" value={cgm25} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK6 : </span>
                                                <input type="text" name="setCmark26" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark26(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark26" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark26(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark26" step="any" className="m-box" value={cgm26} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK7 : </span>
                                                <input type="text" name="setCmark27" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark27(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark27" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark27(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark27" step="any" className="m-box" value={cgm27} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK8 : </span>
                                                <input type="text" name="setCmark28" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark28(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark28" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark28(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark28" step="any" className="m-box" value={cgm28} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>TOTAL : </span>
                                                <input type="text" name ="total_CT2" step="any" className='m-box' value={ CT2 } readOnly/>
                                                <input type="text" name ="total_GT2" step="any" className='m-box' value={ GT2 } readOnly/>
                                                <input type="text" name ="total_CGT2" step="any" className='m-box' value={ CGT2 } readOnly/>
                                                
                                        </div>
                                            <div className='a-button'>
                                            <button className="button-c" onClick={handleClick02}>Click</button>
                                            </div>
                                        <div className='total'>
                                            <span className='gpa'>GPA :</span>

                                            <input type="text" name="setGPAtotal2" step="any" className="t-box" value={n02} readOnly
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>


                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem3*/}
                                <div className='box'>
                                
                                <div className='contain'>
                                        <div className='b-box'>
                                            <div className='sem-box'>
                                                <span className='sem'>SEMESTER : 03</span>
                                            </div>
                                        </div>
                                        <div className='b-box'>
                                            <div className='t-head'><p className='t-span'>MARKS</p></div>
                                            <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                            <div className='t-head'><p className='t-span'>GRADE</p></div>
                                            <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK1 : </span>
                                                <input type="text" name="setCmark31" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark31(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark31" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark31(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark31" step="any" className="m-box" value={cgm31} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK2 : </span>
                                                <input type="text" name="setCmark32" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark32(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark32" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark32(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark32" step="any" className="m-box" value={cgm32} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK3 : </span>
                                                <input type="text" name="setCmark33" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark33(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark33" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark33(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark33" step="any" className="m-box" value={cgm33} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK4 : </span>
                                                <input type="text" name="setCmark34" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark34(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark34" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark34(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark34" step="any" className="m-box" value={cgm34} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK4 : </span>
                                                <input type="text" name="setCmark35" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark35(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark35" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark35(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark35" step="any" className="m-box" value={cgm35} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK6 : </span>
                                                <input type="text" name="setCmark36" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark36(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark36" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark36(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark36" step="any" className="m-box" value={cgm36} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK7 : </span>
                                                <input type="text" name="setCmark37" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark37(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark37" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark37(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark37" step="any" className="m-box" value={cgm37} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>MARK8 : </span>
                                                <input type="text" name="setCmark38" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setCmark38(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setGmark38" step="any" className="m-box"
                                                    onChange={(event) =>
                                                    {
                                                        setGmark38(event.target.value);      
                                                    }}
                                                />
                                                <input type="text" name="setCGmark38" step="any" className="m-box" value={cgm38} readOnly
                                                />
                                        </div>
                                        <div className='b-box'>
                                            <span>TOTAL : </span>
                                                <input type="text" name ="total_CT3" step="any" className='m-box' value={ CT3 } readOnly/>
                                                <input type="text" name ="total_GT3" step="any" className='m-box' value={ GT3 } readOnly/>
                                                <input type="text" name ="total_CGT3" step="any" className='m-box' value={ CGT3 } readOnly/>
                                                
                                        </div>
                                            <div className='a-button'>
                                            <button className="button-c" onClick={handleClick03}>Click</button>
                                            </div>
                                        <div className='total'>
                                            <span className='gpa'>GPA :</span>

                                            <input type="text" name="setGPAtotal3" step="any" className="t-box" value={n03} readOnly
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>


                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem4*/}
                                <div className='box'>
                                <div className='contain'>
                                    <div className='b-box'>
                                        <div className='sem-box'>
                                            <span className='sem'>SEMESTER : 04</span>
                                        </div>
                                    </div>
                                    <div className='b-box'>
                                        <div className='t-head'><p className='t-span'>MARKS</p></div>
                                        <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                        <div className='t-head'><p className='t-span'>GRADE</p></div>
                                        <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK1 : </span>
                                            <input type="text" name="setCmark41" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark41(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark41" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark41(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark41" step="any" className="m-box" value={cgm41} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK2 : </span>
                                            <input type="text" name="setCmark42" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark42(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark42" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark42(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark42" step="any" className="m-box" value={cgm42} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK3 : </span>
                                            <input type="text" name="setCmark43" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark43(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark43" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark43(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark43" step="any" className="m-box" value={cgm43} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark44" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark44(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark44" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark44(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark44" step="any" className="m-box" value={cgm44} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark45" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark45(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark45" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark45(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark45" step="any" className="m-box" value={cgm45} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK6 : </span>
                                            <input type="text" name="setCmark46" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark46(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark46" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark46(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark46" step="any" className="m-box" value={cgm46} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK7 : </span>
                                            <input type="text" name="setCmark47" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark47(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark47" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark47(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark47" step="any" className="m-box" value={cgm47} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK8 : </span>
                                            <input type="text" name="setCmark48" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark48(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark48" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark48(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark48" step="any" className="m-box" value={cgm48} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>TOTAL : </span>
                                            <input type="text" name ="total_CT4" step="any" className='m-box' value={ CT4 } readOnly/>
                                            <input type="text" name ="total_GT4" step="any" className='m-box' value={ GT4 } readOnly/>
                                            <input type="text" name ="total_CGT4" step="any" className='m-box' value={ CGT4 } readOnly/>
                                            
                                    </div>
                                        <div className='a-button'>
                                        <button className="button-c" onClick={handleClick04}>Click</button>
                                        </div>
                                    <div className='total'>
                                        <span className='gpa'>GPA :</span>

                                        <input type="text" name="setGPAtotal4" step="any" className="t-box" value={n04} readOnly
                                        />

                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>

                  </div>


                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem5*/}
                                <div className='box'>
                                <div className='contain'>
                                    <div className='b-box'>
                                        <div className='sem-box'>
                                            <span className='sem'>SEMESTER : 05</span>
                                        </div>
                                    </div>
                                    <div className='b-box'>
                                        <div className='t-head'><p className='t-span'>MARKS</p></div>
                                        <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                        <div className='t-head'><p className='t-span'>GRADE</p></div>
                                        <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK1 : </span>
                                            <input type="text" name="setCmark51" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark51(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark51" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark51(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark51" step="any" className="m-box" value={cgm51} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK2 : </span>
                                            <input type="text" name="setCmark52" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark52(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark52" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark52(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark52" step="any" className="m-box" value={cgm52} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK3 : </span>
                                            <input type="text" name="setCmark53" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark53(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark53" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark53(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark53" step="any" className="m-box" value={cgm53} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark54" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark54(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark54" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark54(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark54" step="any" className="m-box" value={cgm54} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark55" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark55(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark55" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark55(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark55" step="any" className="m-box" value={cgm55} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK6 : </span>
                                            <input type="text" name="setCmark56" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark56(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark56" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark56(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark56" step="any" className="m-box" value={cgm56} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK7 : </span>
                                            <input type="text" name="setCmark57" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark57(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark57" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark57(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark57" step="any" className="m-box" value={cgm57} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK8 : </span>
                                            <input type="text" name="setCmark58" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark58(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark58" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark58(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark58" step="any" className="m-box" value={cgm58} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>TOTAL : </span>
                                            <input type="text" name ="total_CT5" step="any" className='m-box' value={ CT5 } readOnly/>
                                            <input type="text" name ="total_GT5" step="any" className='m-box' value={ GT5 } readOnly/>
                                            <input type="text" name ="total_CGT5" step="any" className='m-box' value={ CGT5 } readOnly/>
                                            
                                    </div>
                                        <div className='a-button'>
                                        <button className="button-c" onClick={handleClick05}>Click</button>
                                        </div>
                                    <div className='total'>
                                        <span className='gpa'>GPA :</span>

                                        <input type="text" name="setGPAtotal5" step="any" className="t-box" value={n05} readOnly
                                        />

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>


                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem6*/}
                                <div className='box'>
                                
                                    <div className='contain'>
                                            <div className='b-box'>
                                                <div className='sem-box'>
                                                    <span className='sem'>SEMESTER : 06</span>
                                                </div>
                                            </div>
                                            <div className='b-box'>
                                                <div className='t-head'><p className='t-span'>MARKS</p></div>
                                                <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                                <div className='t-head'><p className='t-span'>GRADE</p></div>
                                                <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK1 : </span>
                                                    <input type="text" name="setCmark61" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark61(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark61" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark61(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark61" step="any" className="m-box" value={cgm61} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK2 : </span>
                                                    <input type="text" name="setCmark62" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark62(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark62" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark62(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark62" step="any" className="m-box" value={cgm62} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK3 : </span>
                                                    <input type="text" name="setCmark63" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark63(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark63" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark63(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark63" step="any" className="m-box" value={cgm63} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK4 : </span>
                                                    <input type="text" name="setCmark64" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark64(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark64" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark64(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark64" step="any" className="m-box" value={cgm64} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK4 : </span>
                                                    <input type="text" name="setCmark65" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark65(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark65" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark65(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark65" step="any" className="m-box" value={cgm65} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK6 : </span>
                                                    <input type="text" name="setCmark66" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark66(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark66" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark66(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark66" step="any" className="m-box" value={cgm66} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK7 : </span>
                                                    <input type="text" name="setCmark67" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark67(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark67" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark67(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark67" step="any" className="m-box" value={cgm67} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>MARK8 : </span>
                                                    <input type="text" name="setCmark68" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setCmark68(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setGmark68" step="any" className="m-box"
                                                        onChange={(event) =>
                                                        {
                                                            setGmark68(event.target.value);      
                                                        }}
                                                    />
                                                    <input type="text" name="setCGmark68" step="any" className="m-box" value={cgm68} readOnly
                                                    />
                                            </div>
                                            <div className='b-box'>
                                                <span>TOTAL : </span>
                                                    <input type="text" name ="total_CT6" step="any" className='m-box' value={ CT6 } readOnly/>
                                                    <input type="text" name ="total_GT6" step="any" className='m-box' value={ GT6 } readOnly/>
                                                    <input type="text" name ="total_CGT6" step="any" className='m-box' value={ CGT6 } readOnly/>
                                                    
                                            </div>
                                                <div className='a-button'>
                                                <button className="button-c" onClick={handleClick06}>Click</button>
                                                </div>
                                            <div className='total'>
                                                <span className='gpa'>GPA :</span>

                                                <input type="text" name="setGPAtotal6" step="any" className="t-box" value={n06} readOnly
                                                />

                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>


                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem7*/}
                                <div className='box'>
                                <div className='contain'>
                                    <div className='b-box'>
                                        <div className='sem-box'>
                                            <span className='sem'>SEMESTER : 07</span>
                                        </div>
                                    </div>
                                    <div className='b-box'>
                                        <div className='t-head'><p className='t-span'>MARKS</p></div>
                                        <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                        <div className='t-head'><p className='t-span'>GRADE</p></div>
                                        <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK1 : </span>
                                            <input type="text" name="setCmark71" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark71(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark71" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark71(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark71" step="any" className="m-box" value={cgm71} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK2 : </span>
                                            <input type="text" name="setCmark72" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark72(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark72" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark72(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark72" step="any" className="m-box" value={cgm72} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK3 : </span>
                                            <input type="text" name="setCmark73" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark73(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark73" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark73(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark73" step="any" className="m-box" value={cgm73} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark74" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark74(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark74" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark74(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark74" step="any" className="m-box" value={cgm74} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark75" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark75(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark75" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark75(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark75" step="any" className="m-box" value={cgm75} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK6 : </span>
                                            <input type="text" name="setCmark76" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark76(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark76" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark76(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark76" step="any" className="m-box" value={cgm76} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK7 : </span>
                                            <input type="text" name="setCmark77" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark77(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark77" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark77(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark77" step="any" className="m-box" value={cgm77} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK8 : </span>
                                            <input type="text" name="setCmark78" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark78(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark78" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark78(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark78" step="any" className="m-box" value={cgm78} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>TOTAL : </span>
                                            <input type="text" name ="total_CT7" step="any" className='m-box' value={ CT7 } readOnly/>
                                            <input type="text" name ="total_GT7" step="any" className='m-box' value={ GT7 } readOnly/>
                                            <input type="text" name ="total_CGT7" step="any" className='m-box' value={ CGT7 } readOnly/>
                                            
                                    </div>
                                        <div className='a-button'>
                                        <button className="button-c" onClick={handleClick07}>Click</button>
                                        </div>
                                    <div className='total'>
                                        <span className='gpa'>GPA :</span>

                                        <input type="text" name="setGPAtotal7" step="any" className="t-box" value={n07} readOnly
                                        />

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>


                  <div>

                    <div className='card'>
                        <div className='container'>
                            <div className="a-box">     {/*Sem8*/}
                                <div className='box'>
                                <div className='contain'>
                                    <div className='b-box'>
                                        <div className='sem-box'>
                                            <span className='sem'>SEMESTER : 08</span>
                                        </div>
                                    </div>
                                    <div className='b-box'>
                                        <div className='t-head'><p className='t-span'>MARKS</p></div>
                                        <div className='t-head'><p className='t-span'>CREDITS</p></div>
                                        <div className='t-head'><p className='t-span'>GRADE</p></div>
                                        <div className='t-head'><p className='t2-span'>CREDITS x GRADE</p></div>
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK1 : </span>
                                            <input type="text" name="setCmark81" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark81(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark81" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark81(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark81" step="any" className="m-box" value={cgm81} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK2 : </span>
                                            <input type="text" name="setCmark82" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark82(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark82" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark82(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark82" step="any" className="m-box" value={cgm82} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK3 : </span>
                                            <input type="text" name="setCmark83" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark83(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark83" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark83(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark83" step="any" className="m-box" value={cgm83} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark84" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark84(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark84" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark84(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark84" step="any" className="m-box" value={cgm84} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK4 : </span>
                                            <input type="text" name="setCmark85" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark85(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark85" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark85(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark85" step="any" className="m-box" value={cgm85} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK6 : </span>
                                            <input type="text" name="setCmark86" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark86(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark86" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark86(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark86" step="any" className="m-box" value={cgm86} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK7 : </span>
                                            <input type="text" name="setCmark87" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark87(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark87" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark87(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark87" step="any" className="m-box" value={cgm87} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>MARK8 : </span>
                                            <input type="text" name="setCmark88" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setCmark88(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setGmark88" step="any" className="m-box"
                                                onChange={(event) =>
                                                {
                                                    setGmark88(event.target.value);      
                                                }}
                                            />
                                            <input type="text" name="setCGmark88" step="any" className="m-box" value={cgm88} readOnly
                                            />
                                    </div>
                                    <div className='b-box'>
                                        <span>TOTAL : </span>
                                            <input type="text" name ="total_CT8" step="any" className='m-box' value={ CT8 } readOnly/>
                                            <input type="text" name ="total_GT8" step="any" className='m-box' value={ GT8 } readOnly/>
                                            <input type="text" name ="total_CGT8" step="any" className='m-box' value={ CGT8 } readOnly/>
                                            
                                    </div>
                                        <div className='a-button'>
                                        <button className="button-c" onClick={handleClick08}>Click</button>
                                        </div>
                                    <div className='total'>
                                        <span className='gpa'>GPA :</span>

                                        <input type="text" name="setGPAtotal8" step="any" className="t-box" value={n08} readOnly
                                        />

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>

                </Carousel>
              </div>
            </div>
          </div>
            
          
          <div className="row">
            <div className="col-1"></div>
              <div className="col-10">
              
              <div>
                <div className='ans'>


                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-01 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT1} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-01 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT1} readOnly/>
                  </div>
                </div>
                
                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-02 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT2} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-02 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT2} readOnly/>
                  </div>
                </div>


                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-03 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT3} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-03 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT3} readOnly/>
                  </div>
                </div>

                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-04 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT4} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-04 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT4} readOnly/>
                  </div>
                </div>

                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-05 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT5} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-05 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT5} readOnly/>
                  </div>
                </div>
                
                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-06 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT6} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-06 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT6} readOnly/>
                  </div>
                </div>
                
                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-07 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT7} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-07 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT7} readOnly/>
                  </div>
                </div>
                
                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-08 TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={GT8} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>SEM-08 CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={CGT8} readOnly/>
                  </div>
                </div>

                <div className='b-button'>
                    <button className="button-c" onClick={totalclick}>Click</button>
                </div>

                <div className='d-box'>
                  <div className='c-boxs'>
                    <span className='r-text'>ALL TOTAL GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={allGtotal} readOnly/>
                  </div>
                  <div className='c-boxs'>
                    <span className='r-text'>ALL CREDITS x GRADE :</span>
                    <input type="text" name="" step="any" className="r-box" value={allCGtotal} readOnly/>
                  </div>
                </div>
                
                


              <div className='p-boxs'>
                  <span className='pr-text'>CGPA : </span>
                  <input type="text" name="" step="any" className="pr-box" value={at} readOnly/>
                    </div>
                </div>
              </div>
                  
              </div>
            <div className="col-1"></div>
          </div>

    </div>
  )
}

export default BoxAll
