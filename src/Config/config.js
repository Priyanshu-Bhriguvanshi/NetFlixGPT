const PROJECT_ID = String(import.meta.env.VITE_APPWRITE_PROJECTID)
const DATABASE_ID = String(import.meta.env.VITE_APPWRITE_DATABASEID)
const COLLECTION_ID  = String(import.meta.env.VITE_APPWRITE_COLLECTIONID)
const BUCKET_ID = String(import.meta.env.VITE_APPWRITE_BUCKETID)
const TMDB_ACCESS_TOKEN = String(import.meta.env.VITE_TMDB_ACCESS_TOKEN)
const TMDB_API_KEY = String(import.meta.VITE_TMDB_API_KEY )
const AI_API =String(import.meta.env.VITE_GPT_API_KEY )
export default {PROJECT_ID,DATABASE_ID,COLLECTION_ID,BUCKET_ID, TMDB_ACCESS_TOKEN, TMDB_API_KEY, AI_API}