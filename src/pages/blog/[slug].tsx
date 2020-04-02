import { BlogJsonLd, NextSeo } from 'next-seo';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import BackLink from '~/src/components/BackLink';
import Footer from '~/src/components/Footer';
import matter from 'gray-matter';

import css from './[slug].module.css';
import getPosts from '~/src/helper/getPosts';
import { GetStaticPaths, GetStaticProps } from 'next';

// @ts-ignore
function Post({ post }: any) {
    if (!post) post = { data: {} };
    return (
        <>
            <>
                <NextSeo
                    title={`${post.title} — Markus Sommer`}
                    description={post.description}
                    canonical={`https://creativeworkspace.de/blog/${post.slug}`}
                />
                <BlogJsonLd
                    url={`https://creativeworkspace.de/blog/${post.slug}`}
                    title={post.title}
                    images={[post.image]}
                    datePublished={post.date}
                    dateModified={post.date}
                    authorName='Markus Sommer'
                    description={post.description}
                />
                <header className={css.header}>
                    <div className={css.headerBackground}>
                        <div role='presentation' className='backgroundImage' />
                        <style jsx>{`
                            .backgroundImage {
                                background-image: url(${post.image});
                                background-position: center center;
                                background-size: cover;
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                will-change: transform;
                            }
                        `}</style>
                    </div>
                    <BackLink />
                </header>
                <div className='container'>
                    <div className={css.main}>
                        <article className={css.article}>
                            <h1>{post.title}</h1>
                            <div>
                                Veröffentlicht am
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString()}
                                </time>
                                von Markus Sommer
                                <br />
                                Letzte Änderung
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString()}
                                </time>
                            </div>
                            <p className='description'>{post.description}</p>
                            <ReactMarkdown source={post.content} />
                        </article>
                    </div>
                    <Footer>
                        <BackLink footer />
                    </Footer>
                </div>
            </>
        </>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    const content = await require(`~/src/content/posts/${context.params?.slug}.md`);
    const markdown: any = matter(content.default);
    const post = {
        ...markdown.data,
        content: markdown.content,
    };
    return {
        props: {
            post,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts();
    const paths = posts.map((post: any) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
};

export default Post;