import { useCallback, useRef } from "react";

export const useDebouncedCallback = (callback: Function, delay: number) => {
    const timeout = useRef<ReturnType<typeof setTimeout>>();
    
  
    return useCallback(
      (...args: any) => {
        const later = () => {
          clearTimeout(timeout.current);
          callback(...args);
        };
  
        clearTimeout(timeout.current);
        timeout.current = setTimeout(later, delay);
      },
      [callback, delay],
    );
  };
  