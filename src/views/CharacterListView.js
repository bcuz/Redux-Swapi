import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getChars} from "../actions";

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getChars()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data      
      return <p>Loading</p>
    } 
    if (this.props.error) {
      return (
      <div>
        <p>{this.props.error}</p>
        <p>try reloading the page</p>
      </div>
      )
    } 
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { characters, fetching, error } = state.chars

  return { characters, fetching, error }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getChars
  }
)(CharacterListView);
