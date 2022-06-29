import { useState } from 'react';

export const useRegister = () => {
  const [count, setCount] = useState(0);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [isPhoneRegistered, setIsPhoneRegistered] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const onPressRegister = () => {
    if (count > 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }

    switch (count) {
      case 1:
        setIsEmailRegistered(true);
        setIsPhoneRegistered(false);
        setIsInvalidEmail(false);
        break;
      case 2:
        setIsEmailRegistered(false);
        setIsPhoneRegistered(true);
        setIsInvalidEmail(false);
        break;
      case 3:
        setIsEmailRegistered(false);
        setIsPhoneRegistered(false);
        setIsInvalidEmail(true);
        break;

      default:
        setIsEmailRegistered(false);
        setIsPhoneRegistered(false);
        setIsInvalidEmail(false);
        break;
    }
  };

  return { isEmailRegistered, isPhoneRegistered, isInvalidEmail, onPressRegister };
};
