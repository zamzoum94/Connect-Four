import React from 'react';

export default class Score extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.Pair = [];
        this.state = {
            Players : props.Players
        }
    }

    constructScore(){
        this.Pair = [];
        let Players = this.state.Players;
        for(let i = 0; i < Players.playerOne.rounds.length; ++i){
            this.Pair.push({first : Players.playerOne.rounds[i], second : Players.playerTwo.rounds[i]});
        }
        
    }

    render(){
        this.constructScore();
        return(
            <div>
                <div className='row'>
                    <div className='col-md-2'>
                        <h5>{this.props.Players.playerOne.name}</h5>
                    </div>
                    <div className='col-md-2'>
                        <h5>{this.props.Players.playerTwo.name}</h5>
                    </div>
                </div>
                {this.Pair.map((element, key) => {
                    return (
                        <div className='row' key={key}>
                            <div className='col-md-2'>
                                <h6>{element.first}</h6>
                            </div>
                            <div className='col-md-2'>
                                <h6>{element.second}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}