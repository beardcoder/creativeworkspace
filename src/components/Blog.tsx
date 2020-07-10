import shortid from 'shortid';
import styles from './Blog.module.css';
import Post from './Post';
import Section from './Section';
import content from '../content/homepage.json';

type Props = {
    posts: any[];
};

export default function Blog({ posts }: Props) {
    return (
        <Section title={content.blog.title} id='blog' data-cy='blog'>
            <div className={styles.articles}>
                {Object.keys(posts).map((key: any, index: number) => (
                    <Post key={shortid.generate()} index={index} post={posts[key]} />
                ))}
            </div>
        </Section>
    );
}
