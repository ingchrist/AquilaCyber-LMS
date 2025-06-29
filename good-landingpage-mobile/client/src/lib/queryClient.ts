import { QueryClient } from "@tanstack/react-query";

// Simplified QueryClient for frontend-only application
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
    mutations: {
      retry: false,
    },
  },
});
