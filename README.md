# How to use

```js
import gql from 'graphql';
import graphqlTester from 'graphql-tester';

const tester = new graphqlTester();

tester
  .getOptions(async => {
    const login = { user: '', password: '' };
    const { token } = await fetch('route/login', login);

    return {
      uri: 'domain/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  })
  .requests([
    {
      name: 'getAllUsers',
      query: gql`query getUser ...`,
      variables: async (queryName) => ({
        dateStart: new Date(),
        ...others
      }),
      parser: ({ data }) => ({
        users: data.users
      }),
      tests: (parsedData, queryName) => {
        describe(`test ${queryName}`, () => {
          it('should be get users', () => {
            expect(parsedData.users.length > 0).toBe(true)
          })
        })
      }
    }
  ])


```
