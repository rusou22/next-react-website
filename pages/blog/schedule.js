import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/image'

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <image
                        
                    
                </figure>
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'

    const post = await getPostBySlug(slug)


    return {
        props: {
            title: post.title,
            publish: post.content,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,

        },
    }
}