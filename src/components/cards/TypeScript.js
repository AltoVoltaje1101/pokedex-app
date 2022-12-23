//

import React from 'react'
import './Cards.css'
export const TypeScript = ({ typeArray }) => { //Return pokemon type icons
    if (typeArray.length > 1) {
        return (
            <td><img src={'icons/'+typeArray[0].type.name+'.svg'} style={{height:'20px'}} alt="first-type" title={capitalize(typeArray[0].type.name)}></img>
             <img src={'icons/'+typeArray[1].type.name+'.svg'} style={{height:'20px'}} alt="second-type" title={capitalize(typeArray[1].type.name)}></img></td>
        )
    } else return (
        <td><img src={'icons/'+typeArray[0].type.name+'.svg'} style={{height:'20px'}} alt="first-type" title={capitalize(typeArray[0].type.name)}></img></td>
    )
}

function capitalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase()+lower.slice(1)
}
