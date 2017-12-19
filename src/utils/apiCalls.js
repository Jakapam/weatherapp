import APIAuth from "../utils/keys";

const apiEndPoint = "https://api.aerisapi.com/forecasts";

export const fetchSevenDay = () => {
  return fetch(`${apiEndPoint}/10128?${APIAuth}`).then(res => res.json());
};

export const fetchSevenHour = () => {
  return fetch(`${apiEndPoint}/10128?filter=1hr&limit=7&${APIAuth}`).then(res =>
    res.json()
  );
};
