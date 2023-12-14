import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'hvk6asfl', // Add your project ID here
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// export const data = await client.fetch(`count(*)`);
// console.log(`Number of documents: ${data}`);

const builder = imageBuilder(client);

export const urlFor = source => builder.image(source);
export default client;
