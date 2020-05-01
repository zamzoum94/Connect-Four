// Get the players names and distribiute colors[ids]

import React from 'react';

export default class Init extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            playerOne : props.playerOne,
            playerTwo : props.playerTwo
        }
    }

    handleInput(event){
        event.preventDefault();
        this.props.playerOne.name = document.getElementById('inputNameOne').value;
        this.props.playerTwo.name = document.getElementById('inputNameTwo').value;
        this.setState({
            playerOne : this.props.playerOne.name,
            playerTwo : this.props.playerTwo.name
        })
    }

    render(){
        return(
            <form method='post'>
                <div className='row'>
                    <div className='col-md-1 offset-md-4'>
                        <label for='nameOne'>Player One </label>
                    </div>
                    <div className='col-md-3'>
                        <input type='text' name='nameOne' id='inputNameOne'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1 offset-md-4'>
                        <label for='nameTwo'>Player Two </label>
                    </div>
                    <div className='col-md-3'>
                        <input type='text' name='nameTwo' id='inputNameTwo'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2 offset-md-6'>
                        <button type="submit" class="btn btn-success" onClick={this.handleInput.bind(this)}>Play</button>
                    </div>
                </div>
            </form>
        )
    }
} 