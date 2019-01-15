import React from 'react';
import ReactDOM from 'react-dom';

let films = [
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
]

class Hiring extends React.Component {
    render() {
        return (
            <div>We are hiring! Welcome!</div>
        )
    }
}

class NotHiring extends React.Component {
    render() {
        return (
            <div>We are not hiring! Go away!</div>
        )
    }
}

class Filmography extends React.Component {

    state = { 
        complete: true,
        freeBookmark: true,
        hiring: false
    };

    changeComplete = () => {
        this.setState(prevState => ({
            complete: !prevState.complete
        }));
    }
    render() {
        let { films } = this.props;
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1>The filmography is {this.state.complete ? 'complete' : 'not complete'}</h1>
                {films.map((film, i) => 
                    <Film 
                        key={i} 
                        title={film.title} 
                        year={film.year}
                        freeBookmark={this.state.freeBookmark} />
                )}
                <button onClick={this.changeComplete}>Click</button>
            </div>
        )
    }
}

class Film extends React.Component {
    render() {
        let { title, year, freeBookmark } = this.props;
        return (
            <li>
                {title} ({year})
                <p>Free Boomark Today: {freeBookmark ? 'Yes' : 'Nope'}</p>
            </li>            
        )
    }
}

ReactDOM.render(
    <Filmography films={films} />,
    document.getElementById('root')
);