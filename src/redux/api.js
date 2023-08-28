import axios from 'axios';

const fetchGreeting = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/greetings/random');
  return response.data;
};

export default fetchGreeting;
