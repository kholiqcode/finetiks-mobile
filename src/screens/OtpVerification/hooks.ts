import { useEffect, useState } from 'react';

export const useOtpVerification = () => {
  const [counter, setCounter] = useState(59);

  useEffect(() => {
    const timer: unknown = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer as number);
  }, [counter]);

  const onPressResend = () => setCounter(0);

  return { onPressResend, counter };
};
