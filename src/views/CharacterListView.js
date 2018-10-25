import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters()
      console.log('this is from CDM:', this.props)
    // call our action
  }

  render() {
    if (this.props.fetching) {
     return <h2>Fetching data...</h2>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching,
  }

}
export default connect(
    mapStateToProps,
  {getCharacters}
)(CharacterListView);
