import { useState } from "react";

function useToggle(initialVal = false): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggle;
