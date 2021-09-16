export const Strings = {
  default: {
    repositorySearch: {
      placeholder: 'Search Repository',
      buttonText: 'Search',
    },
  },
  dynamic: {
    results: (count: number) => (count === 1 ? 'result' : 'results'),
  },
};

export enum AsyncTrunkRequestStatus {
  Initial = 'initial',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}
