/* eslint-disable import/prefer-default-export */
import { useEffect, useState, useRef } from 'react';

export function useNearScreen() {
  const el = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ?
        window.IntersectionObserver :
        import('intersection-observer'),
    ).then(() => {
      const observer = new window.IntersectionObserver(((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      }));
      el.current && observer.observe(el.current);
    });
  }, [el]);

  return [show, el];
}
