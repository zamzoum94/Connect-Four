// Grid
import React from 'react';
import { createPortal } from 'react-dom';

export default class Grid extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            playerOne : props.Players.playerOne,
            playerTwo : props.Players.playerTwo,
            turn : props.Players.playerOne,
        }
        this.grid = (this.grid === undefined ? [] : this.grid);
        this.MAX = 5;
        this.turn = this.state.turn
    }

    handleClick(event){
        event.target.disabled = true;
        if(this.state.turn === this.state.playerOne){
            this.updateGrid(event.target.id, 1);
            event.target.className = 'btn btn-primary button';
            this.setState({
                turn : this.state.playerTwo
            });
        } else{
            this.updateGrid(event.target.id, -1);
            event.target.className = 'btn btn-danger button';
            this.setState({
                turn : this.state.playerOne
            });
        }
    }

    updateGrid(id, playerMark){
        let L = parseInt(id[0]);
        let C = parseInt(id[1]);
        this.grid[L][C] = playerMark
        let winner = this.checkWinner(L, C);
        if(winner){
            this.disableGrid();
            this.enableChoice();
            this.props.handleWin(playerMark);
        }
    }

    disableGrid(){
        for(let i = 0; i <= this.MAX; ++i){
            for(let j = 0; j <= this.MAX; ++j){
                this.grid[i][j] = 0;
                let id = i + '' + j;
                document.getElementById(id).disabled = true;
            }
        }
    }

    enableGrid(){
        for(let i = 0; i <= this.MAX; ++i){
            for(let j = 0; j <= this.MAX; ++j){
                let id = i + '' + j;             
                document.getElementById(id).disabled = false;
                document.getElementById(id).className = 'btn btn-light button';
            }
        }
    }

    enableChoice(){
        document.getElementById('newPlayers').disabled = false;
        document.getElementById('newRound').disabled = false;
    }

    disableChoice(){
        document.getElementById('newPlayers').disabled = true;
        document.getElementById('newRound').disabled = true;
    }

    newRound(){
        alert('clicked')
        this.enableGrid();
        this.disableChoice();
    }

    newPlayers(){

    }

    checkWinner(L, C){
        let sum = 0;
        // Check Line
        for(let i = 1; i <= this.MAX; ++i){
            if(this.grid[L][i] === 0){sum = 0; continue;}
            sum = (this.grid[L][i] ^ this.grid[L][i - 1]) === 0 ? sum + 1 : 0;
            if(sum >= 3){
                return true;
            }
        }

        // Check Column
        sum = 0;
        for(let i = 1; i <= this.MAX; ++i){
            if(this.grid[i][C] === 0){sum = 0; continue;}
            sum = (this.grid[i][C] ^ this.grid[i - 1][C]) === 0 ? sum + 1 : 0;
            if(sum >= 3){
                return true;
            }
        }

        // checkDiagonal
        // later
        return false;
    }

    constructGrid(){
        if(!this.gridExists){
            for(let i = 0; i <= this.MAX; ++i){
                this.grid.push([]);
                for(let j = 0; j <= this.MAX; ++j){
                    this.grid[i].push(0);
                }
            }
            this.gridExists = true;
        }
    }

    render(){
        this.constructGrid();
        return(
            <div>
                <div className='row'>
                        <div className='col-md-2'>
                            <h3>
                                {this.state.turn.name}
                            </h3>
                        </div>
                        <div className='col-md-1'>
                            <h3>
                                turn
                            </h3>
                        </div>
                </div>
                <div className='row'>
                    <div className='col-md-1 bordur'>
                        <button id='00' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='01' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='02' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='03' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='04' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='05' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1 bordur'>
                        <button id='10' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='11' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='12' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='13' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='14' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='15' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1 bordur'>
                        <button id='20' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='21' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='22' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='23' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='24' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='25' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1 bordur'>
                        <button id='30' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='31' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='32' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='33' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='34' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='35' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1 bordur'>
                        <button id='40' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='41' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='42' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='43' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='44' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='45' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1 bordur'>
                        <button id='50' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='51' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='52' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='53' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='54' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div className='col-md-1 bordur'>
                        <button id='55' className='btn btn-light button' onClick={this.handleClick.bind(this)}></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2 offset-md-2'>
                        <button type="button" className="btn btn-success" id='newRound' onClick={this.newRound.bind(this)}>Another round</button>
                    </div>
                    <div className='col-md-2'>
                        <button type="button" className="btn btn-warning" id='newPlayers' onClick={this.newPlayers.bind(this)}>New Players</button>
                    </div>
                </div>
            </div>
        )
    }
} 