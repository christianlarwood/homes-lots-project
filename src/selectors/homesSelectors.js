export const getCompatibleHomeIds = (combinations, lotData) => {
  return combinations
    .filter((combo) => combo.lotId === lotData.lotId)
    .map((match) => match.homePlanId);
};

export const getCompatibleHomesData = (combinations, homes) => {
  if (homes.length === 0) return [];
  return combinations.map((homePlanId) =>
    homes.find((home) => home.homePlanId === homePlanId)
  );
};