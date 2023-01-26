import { useCallback, useState } from "react";

export const useComponentSize = () => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback(event => {
    const { width, height, x, y } = event.nativeEvent.layout;
    setSize({ width, height, x, y });
  }, []);

  return [size, onLayout];
};
