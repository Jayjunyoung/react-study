import axios from "axios";
import { useCallback, useMemo } from "react";
import { useData } from "../hooks/useData";
import { computeRequirements } from "../utils/computeRequirements";

interface ProductProps {
  productId: string;
  referrer: string;
  theme: string;
}

export default function ProductPage({
  productId,
  referrer,
  theme,
}: ProductProps) {
  const product = useData("/product/" + productId);

  const requirements = useMemo(() => {
    // Calls your function and caches its result
    // 함수를 호출하고 그 결과를 캐시합니다.
    return computeRequirements(product);
  }, [product]);

  const handleSubmit = useCallback(
    (orderDetails: string[]) => {
      // Caches your function itself
      // 함수 자체를 캐시합니다.
      axios.post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div className={theme}>
      {/*<ShippingForm requirements={requirements} onSubmit={handleSubmit} />*/}
    </div>
  );
}
