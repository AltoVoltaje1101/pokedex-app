import React from 'react'
import { PokemonCard } from './PokemonCard'
import './Cards.css'
export const AllCards = ({ results }) => {
    return (
        <div className='container-pokemon'>
            <table className='container-table' id='container-table'>
                {results.map((element, index) => {
                    if (index % 5 === 0) {
                        return (//Pokemon grid 4*5
                            <tr>
                                <td className="col"><PokemonCard url={results[index].url} /></td>
                                <td className="col"><PokemonCard url={results[index + 1].url} /></td>
                                <td className="col"><PokemonCard url={results[index + 2].url} /></td>
                                <td className="col"><PokemonCard url={results[index + 3].url} /></td>
                                <td className="col"><PokemonCard url={results[index + 4].url} /></td>
                            </tr>
                        );
                    }else return null
                })
                }
            </table>

        </div>
    )
}