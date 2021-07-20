import React from 'react';

export default class Movie extends React.Component {
    // constructors:
    constructor(props){
        super(props);

        this.state = {
            title: this.props.data.title
        }

        this.handleClick = this.onClick.bind(this);
    }

        onClick(){
            // this toggles 
            if (this.state.title === 'hayyyy') {
                this.setState({title: 'ohhhhh'});
                return;
            }
           this.setState({title: 'hayyyy'})
    }// end constructor
    

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClick}>Click Me</button>
                <p>{this.props.data.genre}</p>
                <img src={this.props.data.image} alt={this.props.data.title}/>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.data.trailer}`} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </div>
        )
    }
}
