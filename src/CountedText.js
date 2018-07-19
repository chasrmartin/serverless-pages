// -*-mode: rjsx -*-
import React, { Component } from 'react';
import Countable from 'countable';
import {Line, Circle} from 'rc-progress';

class Text extends Component {
    render() {
        return (
            <textarea id="words"
                      cols="60" rows="10">
            </textarea>
        );
    }
}

class WordCount extends Component {
    render() {
        console.log("WordCount.render called");
        console.log(this.props);
        return (
            <div>
              {this.props.count}
            </div>
        );
    }
}

class Progress extends Component {
    constructor(props){
        super(props);
        console.log("Progress.ctor called");
    }

    render() {
        console.log(`Progress.render called:`, this.props.percent);
        const containerStyle = {
            width: '250px',
            display: 'inline-block'
        };
        const circleContainerStyle = {
            width: '30px',
            height: '30px',
            display: 'inline-block',
        };
        return (
            <div>
              <div style={containerStyle}>
                <Line percent={this.props.percent}
                      strokeWidth="5"
                      strokeColor={this.props.color} />
              </div>
              <br />
              <div style={circleContainerStyle}>
                <Circle percent={this.props.percent}
                        strokeWidth="5"
                        strokeColor={this.props.color}/>
              </div> 
            </div>
        );
    }
}


export default class CountedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: 750,
            count: 0,
            percent: 0,
            color: '#3FC7FA',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let textArea = document.getElementById("words");
        Countable.on(textArea,
                     count => this.handleChange(count.words));
    }
    handleChange(count){
        let pct = ((count / this.state.target)*100).toFixed(0);
        this.setState({
            count: count,
            percent: pct,
            color: (pct<=100) ? '#3FC7FA' : '#00FF00'
        });

    }
    render() {
        return (
            <div>
              <h2>I'm here!</h2>
              <Text/>
              <WordCount count={this.state.count}  />
              <Progress percent={this.state.percent} color={this.state.color}/>
            </div>
        );
    }
}
