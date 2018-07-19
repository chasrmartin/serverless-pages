// -*-mode: rjsx -*-
import React, { Component } from 'react';

class Text extends Component {
    render() {
        return (
            <textarea cols="50" rows="10" defaultValue="Type here">
            </textarea>
        );
    }
}

class WordCount extends Component {
    render() {
        return (
            <div>
              222
            </div>
        );
    }
}

export default class CountedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 555
        } ;
    }
    
    render() {
        return (
            <div>
              <h2>I'm here!</h2>
              <Text/>
              <WordCount />
            </div>
        );
    }
}
