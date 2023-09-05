'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

export default function QueryProviders({ children }: Props) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
