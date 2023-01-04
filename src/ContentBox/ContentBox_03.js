import React from 'react'
import "./ContentBox.css"

function ContentBox_03() {




  return (
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
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>MARK2 : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>MARK3 : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>MARK4 : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>MARK5 : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>MARK6 : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>MARK7 : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>MARK8 : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
        <div className='b-box'>
            <span>TOTAL : </span>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
                <input type="text" name="" step="any" className="m-box"/>
        </div>
            <div className='a-button'>
            <button className="button-c" >Click</button>
            </div>
        <div className='total'>
            <span className='gpa'>GPA :</span>
            <input className='t-box' type="text" name="" step="any" />
        </div>
    </div>
  )
}

export default ContentBox_03;