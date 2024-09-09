export function computeRequirements(product: any) {
  if (!product) return [];
  // Add your logic to compute product requirements
  return product.requirements || [];
}
