import {Component} from 'react';

export class Component1 extends Component{
    constructor(){
        super();
        this.state = {count: 0};
    }

    textCounter = (event)=>{
        this.setState({
            count: (event.target.value).length
        })
    }

    render(){
        return(
            <div>
                <h1>
                    Rescponsive Paragraph Word Count
                </h1>
                <div>
                    <textarea name="" id="" cols="35" rows="10" placeholder='Enter Your Text' onChange={this.textCounter}>
                    </textarea>
                    <p>Word Count: {this.state.count}</p>
                </div>
            </div>
        )
    }
}