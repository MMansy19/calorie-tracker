export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};


export const getUser = async (setUser) => {
  try {
    console.log("making a request to the server to get the user data");
    const response = await fetch(
      "http://random-data-api.com/api/users/random_user"
    );
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setUser({
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      age: data.age,
      weight: data.weight,
      height: data.height,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Handle the error here, e.g., retrying after a delay
  }
};
