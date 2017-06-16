import Relay from 'react-relay'

export default class UpdatePokemonMutation extends Relay.Mutation {
  getMutation () {
    return Relay.QL`mutation {updatePokemon}`
  }
  getFatQuery () {
    return Relay.QL`
    fragment on UpdatePokemonPayload {
      pokemon {
        id
        name
        url
      }
    }
    `
  }
  getConfigs () {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          pokemon: this.props.id,
        },
      },
    ]
  }
  getVariables () {
    return {
      id: this.props.id,
      name: this.props.name,
      url: this.props.url,
    }
  }
  getOptimisticResponse () {
  }
}

