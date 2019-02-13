import React, { Component } from 'react'
import API from '../API';
import Item from './Item'
import OutfitsContainer from './OutfitsContainer';

class UserOutfits extends Component {

    state = {
        allOutfits: []
    }

    componentDidMount() {
        API.getOutfits()
        .then(outfit => this.setState({
            allOutfits: outfit
        }))
    }

    // outfitID = () => {
    //     let array = this.state.allOutfits
    //     let arrayID = []
    //     for (let i = 0; i < array.length; i++) {
    //         arrayID = [...arrayID, array[i]['id'] ]
    //         // arrayID = {...arrayID, [i]: array[i]['id']}
    //     }

    //     // return arrayID
    //     console.log(arrayID)
    // }

    singleOutfit = () => {
        let array = this.state.allOutfits
        let arrayOutfits = []
        // let oneOutfit = []
        for (let i = 0; i < array.length; i++) {
            arrayOutfits = [...arrayOutfits, array[i]['outfit'] ]
                // console.log(array[i]['outfit'])
        // for(let j = 0; j < array[i]['outfit'].length; j++) {
        //     // console.log(array[i]['outfit'][j])
        //     arrayOutfits = [...arrayOutfits, array[i]['outfit'][j] ]
        // }
        //         // arrayOutfits = [...arrayOutfits, array[i][key] ]
                // arrayOutfits = array[i][key]
                // console.log(arrayOutfits)
                
            
            // for (let k = 0; k < arrayOutfits[i].length; k++) {
            //     oneOutfit = [...oneOutfit, arrayOutfits[i][k] ]
            // }
        
        }
        // console.log(arrayOutfits)   
        return arrayOutfits 
        // console.log(oneOutfit)
        // return oneOutfit
    }

    render() {
        return (
            <div>
                <h1>Outfits</h1>
                {/* {this.outfitID()} */}
                {this.singleOutfit().map(outfit => 
                    <OutfitsContainer outfit={outfit} />) }
                {/* {this.singleOutfit().map(outfit => 
                    <Item item={outfit} /> )} */}
            </div>
        )
    }
}

export default UserOutfits