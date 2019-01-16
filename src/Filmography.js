import React, { Component } from 'react';
import Film from './Film';
import Hiring from './Hiring';
import NotHiring from './NotHiring';

// example of class based component:
// we don't need "React.Component" because we imported at the top using destructuring
class Filmography extends Component { 

    // defaultProps will be displayed if no props are passed to the component
    static defaultProps = {
        films: [
            {"title": "Into the Abyss", "year": "2010"}
        ]
    }
    
    // example of declaring state within a constructor:
    // the constructor is called before the component is mounted, so it's a great place to initialize local state 
    constructor(props) {
        super(props); // this is required
        this.state = {
            complete: true,
            hiring: false,
            data: [],
            loading: false
        };
        // binding "this" is only necessary of the function declaration doesn't use arrow syntax:
       this.handleClick = this.handleClick.bind(this);
    }

    // example of declaring state as a static value instead of with constructor:
    // state = {
    //     complete: true,
    //     hiring: false
    // }

    // component life cycle methods are ONLY available when using class component syntax, not function syntax
    componentDidMount() { 
        console.log('This component is now mounted.');
        // componentDidMount is a good palce to fetch data
        this.setState({loading: true});
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate() {
        console.log('The component just updated.');
    }

    // setState without callback function
    handleClick = () => {
        this.setState({
            complete: !this.state.complete
        });
    }

    // using old function syntax will neccesitate binding "this" up in the constructor
    // handleClick = function() {
    //     this.setState({
    //         complete: !this.state.complete
    //     });
    // }

    // setState with callback function (and arrow syntax)
    // handleClick = () => {
    //     this.setState(prevState => ({
    //         complete: !prevState.complete
    //     }));
    // }

    render() {
        // destructure the object data so that we don't need to use "this.props." every time:
        let {films} = this.props;       
        
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>

                {/* conditional component rendering */}
                {this.state.hiring ? <Hiring /> : <NotHiring />}

                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map((product) => {
                            return (
                                <div key={product.id}>
                                    <h3>Film Product of the Week</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} alt={product.name} />
                                </div>
                            )
                        })}
                    </div>
                }

                {/* conditional displaying using state */}
                <h1>The filmography is {this.state.complete ? 'complete' : 'incomplete'}</h1>
                <ul>
                    {films.map((film, i) =>
                        <Film key={i} title={film.title} year={film.year} />   
                    )}
                </ul>
            </div>
        )
    }
}


// class based version:
// class Film extends Component {
//     render() {
//         let {title, year} = this.props;
//         return (
//             <li>{title} ({year})</li>
//         )
//     }
// }

export default Filmography;