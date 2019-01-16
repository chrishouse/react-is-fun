import React, { Component } from 'react';
import { render } from 'react-dom';
import Filmography from './Filmography'

const filmList = [
    {
        'title': 'Aguire: The Wrath of God',
        'year': '1978'
    },
    {
        'title': 'Fitzcarraldo',
        'year': '1983'
    },
    {
        'title': 'Grizzly Man',
        'year': '2004'
    },
    {
        'title': 'Rescue Dawn',
        'year': '2006'
    }
];


// Forms in React:
// class FavoriteColorForm extends Component {
//     state = {
//         value: ''
//     }
//     newColor = e => {
//         this.setState({ value: e.target.value });        
//     }

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`); // template strings are an ES6 feature
//         e.preventDefault();
//     }
        
//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color: 
//                     <input 
//                         type="color"
//                         onChange={this.newColor}/>
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// we don't need "ReactDOM.render" because we imported at the top using destructuring
render(
    <Filmography films={filmList} />,
    document.querySelector('#root')
);

// rendering the form above:
// render(
//     <FavoriteColorForm />,
//     document.querySelector('#root')
// );