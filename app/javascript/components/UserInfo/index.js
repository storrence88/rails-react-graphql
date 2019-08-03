import React from 'react';
import cs from './styles';

const UserInfo = () => (
  <Query query={Me}>
    {({ data, loading }) => {
      if (loading) return '...Loading';
      if (!data.me) {
        // Show login form
        return;
      }

      const { fullName } = data.me;
      return <div className={cd.info}>😈</div>
    }}
  </Query>
);

export default UserInfo;