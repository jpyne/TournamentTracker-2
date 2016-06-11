import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import PlayerList from './PlayerList';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as playerActions from '../../actions/player_actions';

const FilteredPlayerList = React.createClass({
    mixins: [PureRenderMixin],
    render: function(){
        return <Paper zDepth={1}>
            <Paper zDepth={2}>
                <RaisedButton label="Refresh Players" onTouchTap={(e) => this.props.initiateLoadPlayers()} />
                <TextField hintText="Filter Players" onChange={(e) => this.props.updatePlayerFilter(e.target.value)} />
            </Paper>
            <PlayerList players={this.props.filteredPlayers} handlePlayerTouched={(p) => console.log(p)} />
        </Paper>;
    }
});

function mapStateToProps(state){
    return {
        filterText: state.players.filter,
        filteredPlayers: state.players.players.filter((p) => {
            if (state.players.filter && state.players.filter.length > 0){
                return p.playerName.includes(state.players.filter);
            } else {
                return true;
            }
        })
    }
}

export default connect(mapStateToProps, playerActions)(FilteredPlayerList);
