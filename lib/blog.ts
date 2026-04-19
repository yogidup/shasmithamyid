import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type PostData = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  tags: string[]
  contentHtml?: string
  toc?: { id: string; text: string; level: number }[]
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      ...(matterResult.data as { 
        title: string; 
        description: string; 
        date: string; 
        author: string; 
        category: string; 
        image: string; 
        tags: string[] 
      }),
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  // Ekstrak Table of Contents secara manual dari markdown content
  const toc: { id: string; text: string; level: number }[] = []
  const lines = matterResult.content.split('\n')
  lines.forEach(line => {
    const match = line.match(/^(#{2,3})\s+(.*)/)
    if (match) {
      const level = match[1].length
      const text = match[2]
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      toc.push({ id, text, level })
    }
  })

  // Proses Markdown ke HTML dengan ID pada heading
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    toc,
    ...(matterResult.data as { 
      title: string; 
      description: string; 
      date: string; 
      author: string; 
      category: string; 
      image: string; 
      tags: string[] 
    }),
  }
}
