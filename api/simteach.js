const express = require('express');
const router = express.Router();
const axios = require('axios');

// GitHub Config
const GITHUB_TOKEN = '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';
const REPO_OWNER = 'F4REBII-AMIR';
const REPO_NAME = 'SimTeach';
const FILE_PATH = 'simteachapi.json';
const GITHUB_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

// Protected words
const PROTECTED_WORDS = new Set([
  'Farebi Amir',
  'farebi',
  'Amir',
  'Jordan',
  'Nomi',
  'Jordan Xhk'
]);

let knowledge = [];

async function loadKnowledgeFromGitHub() {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3.raw'
      }
    });
    knowledge = response.data || [];
  } catch (error) {
    console.error('Error loading from GitHub:', error.message);
  }
}

async function saveKnowledgeToGitHub(data) {
  try {
    const getRes = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    await axios.put(GITHUB_API_URL, {
      message: 'Update simteachapi.json from API',
      content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
      sha: getRes.data.sha
    }, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });
  } catch (error) {
    console.error('Error saving to GitHub:', error.message);
    throw error;
  }
}

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  next();
});

router.get('/teach', async (req, res) => {
  const { query, response } = req.query;
  if (!query || !response) {
    return res.status(400).json({ 
      error: 'Both query and response parameters are required',
      example: '/api/simteach/teach?query=hello&response=world'
    });
  }
  if (PROTECTED_WORDS.has(query)) {
    return res.status(403).json({
      error: `"${query}" is a protected word and cannot be taught`,
      protectedWords: Array.from(PROTECTED_WORDS)
    });
  }

  await loadKnowledgeFromGitHub();
  knowledge = knowledge.filter(item => item.query !== query);
  knowledge.push({ query, response });

  try {
    await saveKnowledgeToGitHub(knowledge);
    res.json({ 
      status: 'success',
      message: `Learned: ${query} => ${response}`,
      data: { query, response }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save knowledge', details: err.message });
  }
});

router.post('/teach', async (req, res) => {
  const { query, response } = req.body;
  if (!query || !response) {
    return res.status(400).json({ 
      error: 'Both query and response are required in JSON format',
      example: { "query": "hello", "response": "world" }
    });
  }
  if (PROTECTED_WORDS.has(query)) {
    return res.status(403).json({
      error: `"${query}" is a protected word and cannot be taught`,
      protectedWords: Array.from(PROTECTED_WORDS)
    });
  }

  await loadKnowledgeFromGitHub();
  knowledge = knowledge.filter(item => item.query !== query);
  knowledge.push({ query, response });

  try {
    await saveKnowledgeToGitHub(knowledge);
    res.json({ 
      status: 'success',
      message: `Learned: ${query} => ${response}`,
      data: { query, response }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save knowledge', details: err.message });
  }
});

router.get('/sim', async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ 
      error: 'Query parameter is required',
      example: '/api/simteach/sim?query=hello'
    });
  }

  await loadKnowledgeFromGitHub();
  const found = knowledge.find(item => item.query === query);
  if (!found) {
    return res.status(404).json({ 
      error: 'Response not found for this query',
      protectedWords: Array.from(PROTECTED_WORDS)
    });
  }

  res.json({ 
    status: 'success',
    query: found.query,
    response: found.response 
  });
});

router.get('/protected-words', (req, res) => {
  res.json({
    status: 'success',
    protectedWords: Array.from(PROTECTED_WORDS)
  });
});

module.exports = router;