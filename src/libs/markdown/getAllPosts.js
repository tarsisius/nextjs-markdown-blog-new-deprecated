import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { postsDirectory } from '@/libs/config'

export default function getAllPosts() {
    const files = fs.readdirSync(postsDirectory)
    const posts = files
        .map(file => {
            const slug = file.replace(/\.md$/, '')
            const post = path.join(postsDirectory, file)
            const content = fs.readFileSync(post, 'utf8')
            const matterResult = matter(content)
            return {
                slug,
                ...matterResult.data
            }
        })
    const filtered = posts
        .sort((a, b) =>
            a.date > b.date
                ? '-1'
                : '1'
        )
    return filtered
}
