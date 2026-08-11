const files = import.meta.glob('../content/blogs/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
})

function parseFrontmatter(raw) {
    const match = raw.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/)

    if (!match) {
        return {
            data: {},
            content: raw,
        }
    }

    const frontmatter = match[1]
    const content = match[2]

    const data = {}
    let currentArray = null

    frontmatter.split('\n').forEach((line) => {
        const trimmed = line.trim()

        if (!trimmed) return

        if (trimmed.startsWith('- ') && currentArray) {
            data[currentArray].push(trimmed.slice(2).replace(/^["']|["']$/g, ''))
            return
        }

        const separator = trimmed.indexOf(':')

        if (separator === -1) return

        const key = trimmed.slice(0, separator).trim()
        let value = trimmed.slice(separator + 1).trim()

        if (!value) {
            data[key] = []
            currentArray = key
            return
        }

        currentArray = null

        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1)
        }

        data[key] = value
    })

    return {
        data,
        content,
    }
}

const blogs = Object.entries(files).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)

    const slug = path
        .split('/')
        .pop()
        .replace('.md', '')

    return {
        slug,
        ...data,
        content,
    }
})

export default blogs.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
)