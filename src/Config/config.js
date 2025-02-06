const PROJECT_ID = String(import.meta.env.VITE_APPWRITE_PROJECTID)
const DATABASE_ID = String(import.meta.env.VITE_APPWRITE_DATABASEID)
const COLLECTION_ID  = String(import.meta.env.VITE_APPWRITE_COLLECTIONID)
const BUCKET_ID = String(import.meta.env.VITE_APPWRITE_BUCKETID)

export default {PROJECT_ID,DATABASE_ID,COLLECTION_ID,BUCKET_ID}