export const getCompatibleLotIds = (combinations, homeData) => {
  return combinations
    .filter((combo) => combo.homePlanId === homeData.homePlanId)
    .map((match) => match.lotId);
};

export const getCompatibleLotsData = (combinations, lots) => {
  if (lots.length === 0) return [];
  return combinations.map((lotId) => lots.find((lot) => lot.lotId === lotId));
};