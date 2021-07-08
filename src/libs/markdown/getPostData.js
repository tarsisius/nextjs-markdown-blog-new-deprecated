import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import hljs from 'highlight.js'
import { postsDirectory } from '@/libs/config'

export default function getPostData(slug) {
    const post = path.join(postsDirectory, `${slug}.md`)
    const content = fs.readFileSync(post, 'utf8')
    const result = matter(content)

    marked.setOptions({
        highlight: (code, lang) => {
            const language = hljs.getLanguage(lang)
                ? lang
                : 'plaintext'
            return hljs.highlight(code, { language }).value
        }
    })

    const processedContent = marked(result.content)
    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...result.data
    }
}