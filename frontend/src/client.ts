// client.ts
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'cqhzons8', 
  dataset: 'production', 
  useCdn: true 
})