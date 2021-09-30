import { useEffect, useRef, useState } from 'react';

export const useNearScreen = ({distance = '100px'} = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      // console.log(entries);
      const element = entries[0];
      console.log(element.isIntersecting)
      if(element.isIntersecting) {
        setShow(true); 
        observer.disconnect();
      }
    }

    // Dynamic import 
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer') // Add polyfill, IE11
    // IntersectionObserver || import('intersection-observer')  
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      });    
      observer.observe(fromRef.current);
    })

    return () => observer && observer.disconnect(); // Para cuando se componente se deje de utilizar se limpie y no se ejecute el setShow
  });

  return {isNearScreen, fromRef};
}
