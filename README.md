prototype

```
queryVariables = {
  GetAllPoneys: async () => ({ dateStart: new Date(), dateEnd: new Date(), movieId: '' })
}

gqlTester()
  // optional
  .getOptions(async => {
    const res = await fetch('exemple/login', {user, password});

    return {
      Authorization: `Bearer: ${res.token}`
    }
  })
  .requests([
    { name: 'GetAllPoneys', query: gql`query Get...`, /* parser, tests?, delay, variables? */ },
  ])
  // optional
  .getVariables((queryName, query) => {
    return queryVariables[queryName];
  })


// tests exemple for one query
const tests = (variables, queryName) => {
  describe(`test query ${queryName}`, () => {
    it('should be ...', () => {
      expect(variables.userName.length > 0).toBe(true)
    })
  })
}

// if no tests
// autoTests system
{
  list: [{ a: '' }, { a: 'oui' }],
  movie: {
    theaters: [{
      b: 'prospector'
    }]
  }
}
```

// Check all elements present
Le test automatique check si il y a bien au minimum 1 element dans un tableau et qu'il y a bien au minimum un caractère par variable présent
Si un element ne corespond pas il balance un warning.

Il y a moyen de prévoir un outil qui dump les résultats automatiquement pour faire une meilleur comparaison. ( ne pas faire de systèmes de snap car les données chages )
