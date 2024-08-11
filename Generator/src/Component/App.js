import React, { useState } from 'react'
import './style.css'
import { CloseButton } from 'react-bootstrap'
function App(){
    const [Horizontal , setHorizontal] = useState('100')
    const [Vertical , setVertical] = useState('100')
    const [Blur , setBlur] = useState('5')
    const [Spread , setSpread] = useState('10')
    const [Color , setColor] = useState('#555')
    return(
        <>
            <div className='wrapper '>
                <div className='Generate'>
                    <div className='right_section p-3 border-dark'>
                        <h2 className='text-center pt-3 text-primary'>
                            CSS Color Generator 
                        </h2>
                        <p className='text-center fs-5 text-success '>Changing the color of Box-shadow with this option </p>
                        <div className=' form-control mt-5 me-4 '>
                            <label className='ps-3 fs-4  mb-2'>Horizontal:</label>
                            <br/>
                            <input
                            max={200}
                            min={-200}
                            value={Horizontal}
                            onChange={(e) => setHorizontal(e.target.value)}
                            className='form-range  w-100' type='range' /> 
                        </div>
                        
                        <div className='form-control mt-5  '>
                            <label className='fs-4 ps-3 mb-2'>Vertical:</label>
                            <br/>
                            <input
                            max={200}
                            min={-200}
                            value={Vertical}
                            onChange={(e) => setVertical(e.target.value)}
                             className='form-range  w-100' type='range' /> 
                        </div>
                        
                        <div className='form-control border mt-5 '>
                            <label className='fs-4 ps-3 mb-2'
                            
                            >Blur:</label>
                            <br/>
                            <input
                            max={20}
                            min={0}
                            value={Blur}
                            onChange={(e) => setBlur(e.target.value)}
                            className='form-range  w-100' type='range' /> 
                        </div>
                        
                        <div className='form-control mt-5'>
                            <label className='fs-4 ps-3 mb-2' >Spread:</label>
                            <br/>
                            <input
                            min={-100}
                            max={50}
                            value={Spread}
                            onChange={(e) => setSpread(e.target.value)}
                            className='form-range  w-100 ' type='range' /> 
                        </div>
                        
                        <div className='form-control mt-5'>
                            <label className='fs-4 ps-3 mb-2'>Color:</label>
                            <input className='form-control ' 
                            style={{height:'300px'}} 
                            type='color'
                            onChange={(e) => setColor(e.target.value)}
                            /> 
                        </div>
                        
                        <div className='form-control height-adv mt-5'>
                            <div className='d-flex  adv'>
                                <p className='text-primary'>Terms & Privacy</p>
                                <p>8/10/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className='left_section  '>
                    <div className='indication bg-primary' style={{boxShadow:`${Horizontal}px ${Vertical}px ${Blur}px ${Spread}px ${Color}`}}>
                    
                    </div>
                    <div className='Copy_generator d-flex'>
                        <div className='color_shadow border border-1 border-dark p-3 bg-dark rounded ms-3 circle text-white'>
                            Box Shadow : {Horizontal}px {Vertical}px {Blur}px {Spread}px {Color}
                        </div>
                        <div className='upload_photo   m-2'>
                            <input type='file' className='form-control-file' onChange={(e) => setUrl(e.target.value)}  accept='image/png , image/jpg'/> 
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default App