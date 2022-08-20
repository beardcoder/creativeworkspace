import { GetStaticProps } from 'next'
import HomeHeader from '@/src/components/Home/HomeHeader'
import { HomePersonal } from '@/src/components/Home/HomePersonal'
import HomeProjects from '@/src/components/Home/HomeProjects'
import LayoutPage from '@/src/components/Layout/LayoutPage'
import { getAllPosts } from '@/src/utils/get-blog'
import HomeBlog from '@/src/components/Home/HomeBlog'
import { IRepo } from '@/@types/repo'
import { HomeRepos } from '@/src/components/Home/HomeRepos'
import { HomeSnippets } from '@/src/components/Home/HomeSnippets'
import { ISnippet } from '@/@types/snippet'
import { getRepos } from '@/src/utils/get-repos'
import { getSnippets } from '@/src/utils/get-snippets'
import IArticle from '@/@types/article'

type Props = {
  posts: IArticle[]
  repos: IRepo[]
  snippets: ISnippet[]
}

export default function Home({ posts, repos, snippets }: Props) {
  return (
    <LayoutPage>
      <HomeHeader id='intro' />
      <main>
        <HomePersonal id='me' />
        <HomeProjects id='projects' className='mb-32' />
        <HomeBlog id='blog' posts={posts} className='mb-20' />
        <HomeRepos id='repos' repos={repos} className='mb-20' />
        <HomeSnippets id='snippets' snippets={snippets} className='mb-20' />
      </main>
    </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const repos: IRepo[] = await getRepos()
  const snippets: ISnippet[] = await getSnippets()
  const posts = await getAllPosts(['slug', 'title', 'image', 'tags'])

  return {
    props: {
      repos,
      snippets,
      posts,
    },
  }
}
