export const fetchChallenges = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/challenges`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch challenges');
  }
  return response.json();
};
