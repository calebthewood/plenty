import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';


/**
 * Custom Hook for determining device platform and orientation.
 * @returns "portrait" or "landscape"
 */
export function useOrientation() {

  /** Returns true if the screen is in portrait mode */
  function getOrientation() {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width ? "portrait" : "landscape";
  };

  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const updateOrientation = () => setOrientation(getOrientation());
    Dimensions.addEventListener('change', updateOrientation);
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  return orientation;
}
