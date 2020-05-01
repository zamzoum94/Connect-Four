import React from 'react';
import Score from './score';
import Grid from './grid';


export default class GamePlay extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            Players : props.Players,
            playerOne : props.Players.playerOne,
            playerTwo : props.Players.playerTwo
        }
    }

    handleWin(playerMark){
        alert('executed')
        if(playerMark === 1){
            this.state.playerOne.rounds.push('W');
            this.state.playerTwo.rounds.push('L');
            this.setState({
                playerOne : this.state.playerOne,
                playerTwo : this.state.playerTwo,
                turn : this.state.playerTwo
            });
        } else{
            this.state.playerOne.rounds.push('L');
            this.state.playerTwo.rounds.push('W');
            this.setState({
                playerOne : this.state.playerOne,
                playerTwo : this.state.playerTwo,
                turn : this.state.playerOne
            });
        }
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Score Players={this.state.Players} />
                    </div>
                    <div className='col-md-8'>
                        <Grid Players={this.state.Players} handleWin={this.handleWin.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}