// client
import { ApolloClient } from 'apollo-client';
// cache
import { InMemoryCache } from 'apollo-cache-inmemory';
// links
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
export const createCache = () => {
  const cache = new InMemoryCache();
  if (process.env.NODE_ENV === 'development') {
    window.secretVariableToStoreCache = cache;
  }
  return cache;
};