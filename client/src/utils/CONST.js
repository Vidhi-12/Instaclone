// const API_BASE_PATH = 'http://localhost:4000'
// const API_BASE_PATH = 'https://instaclone-app-22.herokuapp.com'
const API_BASE_PATH = 'https://instaclone-backend-hdsc.onrender.com'

const CONSTANTS = {
    CDN_HOST: '',
    ASSETS_BASE_PATH: '/images',
    API_BASE_PATH,
    getApiUrl: (path) => `${API_BASE_PATH}${path}`
}

export default CONSTANTS;