import React, { useCallback } from 'react';

export default function useOtpVerification() {
  const [isWrong, setIsWrong] = React.useState(false);
  const [counter, setCounter] = React.useState(59);

  React.useEffect(() => {
    const timer: unknown = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer as number);
  }, [counter]);

  const onPressResend = useCallback(() => setCounter(0), [counter]);
  return { isWrong, counter, setIsWrong, setCounter, onPressResend };
}
