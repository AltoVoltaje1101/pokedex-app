import React, { useState } from 'react'
import { TypeScript } from './TypeScript'
import { UseFetch } from '../UseFetch'
import ReactCardFlip from 'react-card-flip'
import './Cards.css'
export const PokemonCard = ({ url }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    var estado = UseFetch(url)
    const { cargando, data } = estado
    const handleClick = e => {
        setIsFlipped(!isFlipped);
    }
    if (data != null) {
        return (
            <div>{
                cargando ?
                    <h1>Cargando...</h1>
                    :
                    <div className="flip-card">
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
                            <div className='card' style={{ width: '14rem', height: '14rem' }} onClick={handleClick}>
                                <div className="front" alt='front-face' >
                                    <center>
                                        <div className='card-header'>
                                            <h1>#{data.id.toString().padStart(3, 0)}</h1>
                                        </div>
                                        <div className='card-body'>
                                            <img src={data.sprites.front_default} alt='pokemon' />
                                        </div>
                                        <div className='card-footer'>
                                            <p className='card-text text-capitalize'>{data.forms[0].name}</p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className='card' style={{ width: '14rem', height: '14rem' }} onClick={handleClick}>
                                <div className="front" alt='front-face' >
                                    <center>
                                        <div className='card-header'>
                                            <h1 style={{margin:'0'}}>#{data.id.toString().padStart(3, 0)}</h1>
                                        </div>
                                        <div className='card-body-back'>
                                            <table className='table-card' id='table-card' cellSpacing="0" cellPadding="0">
                                                <tr>
                                                    <th style={{ borderTopLeftRadius: '10px' }}>Atribute</th>
                                                    <th style={{ borderTopRightRadius: '10px' }}>Value</th>
                                                </tr>
                                                <tr className='td'>
                                                    <td>Height</td>
                                                    <td>{data.height / 10} m</td>
                                                </tr>
                                                <tr>

                                                    <td>Weight</td>
                                                    <td>{data.weight / 10} kg</td>
                                                </tr>
                                                <tr>

                                                    <td>Type</td>
                                                    <TypeScript typeArray={data.types}></TypeScript>
                                                </tr>
                                                <tr>

                                                    <td style={{ borderBottomLeftRadius:'10px' }}>Experience</td>
                                                    <td style={{ borderBottomRightRadius: '10px' }}><center>{data.base_experience}</center> </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='card-footer'>
                                            <p className='card-text text-capitalize'>{data.forms[0].name}</p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>



            }
            </div>
        )
    } else return 0;
}