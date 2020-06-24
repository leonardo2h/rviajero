import { useState } from 'react';

// Custom hook para manejar los input en el formulario
const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange, setValue };
};

export default useInputValue;
