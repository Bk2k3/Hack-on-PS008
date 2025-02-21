// src/api/challenges.js
import axios from 'axios'

export const fetchChallenges = async () => {
  const response = await axios.get('/api/challenges')
  return response.data
}

export const submitChallenge = async (challengeId, code) => {
  const response = await axios.post(`/api/challenges/${challengeId}/submit`, { code })
  return response.data
}