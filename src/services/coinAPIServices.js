export async function fetchAllCoinsPromise() {
  const apiCall = await fetch('https://api.coincap.io/v2/assets');
  const jsonResult = await apiCall.json();

  return jsonResult;
}
