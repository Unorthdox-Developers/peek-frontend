import { ReactNode } from 'react';

export type RepositorySearchLayoutProps = {
  children: {
    search: ReactNode;
  };
};

const RepositorySearchLayout = (props: RepositorySearchLayoutProps) => {
  return (
    <div>
      <div>{props.children.search}</div>
    </div>
  );
};

export default RepositorySearchLayout;
