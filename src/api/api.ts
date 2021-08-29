import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ffaedc21c220.ngrok.io/graphql',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiService = {
  repositoryApi: {
    searchForRepository: async (repositoryName: string) => {
      var data = JSON.stringify({
        query: `query{
          user(userId: "FrolShpak") {
              name
              joined
              url
          }
      }`,
        variables: {},
      });
      const response = await instance.post('', data);
      return response;
    },
  },
};
