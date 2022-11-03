import React, { useState } from "react";

export default function useInputState(
  initialVal: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
}
