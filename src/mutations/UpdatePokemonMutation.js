import Relay from 'react-relay'

export default class UpdatePokemonMutation extends Relay.Mutation {
  getMutation () {
    return Relay.QL`mutation{updatePokemon}`
  }
  getFatQuery () {
    return Relay.QL`
    fragment on UpdatePokemonPayload {
      viewer
      pokemon
    }
    `
  }
  getConfigs () {
    console.log('name : ', this.props.name)
    console.log('url: ', this.props.url)
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          pokemon: {
            id: this.props.pokemon,
            name: this.props.name,
            url: this.props.url,
          },
        },
      },
    ]
  }
  getVariables () {
    return {
      name: this.props.name,
      url: this.props.url,
    }
  }
  getOptimisticResponse () {
  }
}

