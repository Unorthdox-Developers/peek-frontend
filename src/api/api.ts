import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://httpbin.org/',
  timeout: 1000,
});

export const ApiService = {
  repositoryApi: {
    searchForRepository: async (repositoryName: string) => {
      const response = await instance.post('post', {
        repositoryName,
      });
      return response;
    },
  },
};
