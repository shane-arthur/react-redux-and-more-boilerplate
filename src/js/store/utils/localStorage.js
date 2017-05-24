export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state'); // eslint-disable-line no-undef
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(`error getting state from localStorage : ${error}`); // eslint-disable-line no-console
    return null;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState); // eslint-disable-line no-undef
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
};
