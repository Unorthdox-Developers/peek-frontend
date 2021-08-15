import axios from 'axios';

export const ApiService = {
  repositoryApi: {
    searchForRepository: async (repositoryName: string) => {
      const response = await axios.post('https://httpbin.org/post', {
        repositoryName,
      });
      return response;
    },
  },
};
