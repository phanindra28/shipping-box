export const calculateShippingCost = (country, weight) => {
  switch (country) {
    case "Sweden":
      return 7.35 * weight;
    case "China":
      return 11.53 * weight;
    case "Brazil":
      return 15.63 * weight;
    case "Australia":
      return 50.09 * weight;
    default:
      return 0;
  }
};
