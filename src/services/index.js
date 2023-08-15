
const getInitialState = async (URL) => {
  try {
    const response = await fetch(URL);
    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default getInitialState;
