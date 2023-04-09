// import { log } from 'console';
// import { Inter } from 'next/font/google'

// import { log } from "console";

// const inter = Inter({ subsets: ['latin'] })

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=article`);
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);
  
  return (
    <ul>
      {blogs.items.map((item: any) => 
        <li key={item.sys.id}>{item.fields.title}</li>
      )}
    </ul>
  )
}