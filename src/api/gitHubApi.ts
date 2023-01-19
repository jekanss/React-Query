import axios from 'axios';

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: { 
        Authorization: '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'
    }
});