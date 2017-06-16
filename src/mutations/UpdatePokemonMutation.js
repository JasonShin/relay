import Relay from 'react-relay'

export default class UpdatePokemonMutation extends Relay.Mutation {

  getMutation () {
    return Relay.QL`mutation{updatePokemon}`
  }

  getFatQuery () {

  }

  getConfigs () {

  }

  getVariables () {

  }

  getOptimisticResponse () {
    
  }
}

