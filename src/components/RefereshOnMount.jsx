import { useEffect } from "react";

const RefreshOnMount = ({ condition }) => {
  useEffect(() => {
    if (condition) {
      window.location.reload();
    }
  }, [condition]);

  return null;
};

export default RefreshOnMount;
