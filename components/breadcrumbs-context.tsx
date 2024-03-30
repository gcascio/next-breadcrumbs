'use client';

import { createContext, useContext, useEffect } from 'react';

type Context = {
  trailingPath: string;
  setTrailingPath: (path: string) => void;
};

export const BreadCrumbsContext = createContext<Context>({
  trailingPath: '',
  setTrailingPath: () => {},
});

export const useBreadCrumbs = (trailingPath?: string) => {
  const context = useContext(BreadCrumbsContext);

  useEffect(() => {
    context.setTrailingPath(trailingPath ? trailingPath : 'loading');
    return () => context.setTrailingPath('');
  }, [trailingPath, context]);
}