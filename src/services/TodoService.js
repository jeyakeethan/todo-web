import axios from 'axios';

let API_URL;

if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:5194/api/todo'; // for local development
} else {
  API_URL = process.env.REACT_APP_API_URL + '/api/todo'; // for Docker (using the .env variable)
}

console.log('API_URL:', API_URL);

// Get all tasks
export const getTasks = () => {
  return axios
    .get(API_URL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching tasks:', error);
      throw error; // Rethrow error to be handled in the component
    });
};

// Add a new task
export const addTask = (title, description) => {
  return axios
    .post(API_URL, { title, description })
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error adding task:', error);
      throw error; // Rethrow error to be handled in the component
    });
};

// Mark a task as done
export const markTaskAsDone = (id) => {
  return axios
    .delete(`${API_URL}/${id}`)
    .catch((error) => {
      console.error('Error marking task as done:', error);
      throw error; // Rethrow error to be handled in the component
    });
};
