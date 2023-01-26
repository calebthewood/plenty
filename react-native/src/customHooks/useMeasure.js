import { useState, useRef, useEffect } from 'react';

// Currently does nothing, moved to useLayout instead. To refactor or delete
export function useMeasure(ref) {

  const [measure, setMeasure] = useState(null);

  useEffect(() => {
    if (ref.current) {
      console.log("#### Basket Ref")
      ref.current.measure((x,y,width,height,pageX,pageY) => {
        setMeasure({x,y,width,height,pageX,pageY})
      })
    }
  }, []);

  return measure;
}