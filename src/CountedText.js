// -*-mode: rjsx -*-
import React, { Component } from 'react';
import Countable from 'countable';

class Text extends Component {
    render() {
        return (
            <textarea id="words"
                      cols="60" rows="25">
            </textarea>
        );
    }
}

class WordCount extends Component {
    render() {
        console.log("Render called in WordCount");
        console.log(this.props);
        return (
            <div>
              {this.props.count}
            </div>
        );
    }
}

class ProgressBar extends Component {
    render() {
        if(this.props.count < 750){
            return (
                <div>
                  {this.props.count / 750}
                </div>
            );
        } else {
            return (
                <h3>DONE!</h3>
            );
        }
    }
}


export default class CountedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        } ;
    }

    componentDidMount(){
        let textArea = document.getElementById("words");
        Countable.on(textArea,
                     count => this.setState({ count: count.words}));
    }
    
    render() {
        return (
            <div>
              <h2>I'm here!</h2>
              <Text/>
              <WordCount count={this.state.count} />
              <ProgressBar count={this.state.count} />
            </div>
        );
    }
}
