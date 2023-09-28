import {
  QueryClient,
  QueryClientProvider,
  QueryFunction,
  QueryKey,
  useQuery as useOriginalQuery
} from '@tanstack/react-query';
import { FC, PropsWithChildren, useMemo } from 'react';

export const APIProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
          retry: 1,
          staleTime: 1000 * 60 * 5,
          cacheTime: 1000 * 60 * 5
        }
      }
    });
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export function useQuery<T>(queryKey: QueryKey, queryFn: QueryFunction<T>) {
  const result = useOriginalQuery(queryKey, queryFn);
  // Suspense is active so data can't be undefined
  const data = result.data as T;
  return [data, result] as const;
}
