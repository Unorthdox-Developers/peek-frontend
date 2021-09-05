import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com',
});

export const ApiService = {
  repositoryApi: {
    searchForRepository: async (repositoryName: string) => {
      const response = await instance.get('/search/repositories', {
        params: { q: repositoryName },
      });
      console.log(response);
      return response;
    },
  },
};
