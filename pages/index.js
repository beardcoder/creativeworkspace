import HomePortfolio from '@/components/Home/Portfolio'
import HomeAbout from '../components/Home/About'
import HomeIntro from '../components/Home/Intro'
import UiNavigation from '../components/Ui/Navigation'
import styles from './Home.module.css'
import { Octokit } from '@octokit/rest'
import HomeBlog from '@/components/Home/Blog'
import { getAllPosts } from '@/lib/api'
import { NextSeo } from 'next-seo'

export default function Home({ repos, gists, articles }) {
  return (
    <div className={styles.container}>
      <NextSeo
        title='Moderne Web Technologieren, Designer und Frontend Artist 🚀 — Markus Sommer'
        description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
        canonical='https://www.creativeworkspace.de/'
        twitter={{
          handle: '@beardcoder',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <header>
        <UiNavigation />
      </header>
      <main>
        <HomeIntro />
        <HomeAbout />
        <HomeBlog articles={articles} />
        <HomePortfolio repos={repos} gists={gists} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const octokit = new Octokit({
    auth: '24b695afae0050c1e79c0420906936c9c25c7c51',
    userAgent: 'creativeworkspace',
  })

  const repos = await octokit.repos
    .listForUser({
      username: 'beardcoder',
    })
    .then(({ data }) =>
      data
        .filter((item) => !item.fork)
        .map((item) => {
          return {
            id: item.id,
            url: item.html_url,
            name: item.name,
            description: item.description,
          }
        })
    )

  const gists = await octokit.gists
    .listForUser({
      username: 'beardcoder',
    })
    .then(({ data }) =>
      data.map((item) => {
        return {
          id: item.id,
          url: item.html_url,
          description: item.description,
        }
      })
    )

  const articles = getAllPosts(['title', 'createdAt', 'slug', 'image', 'type'])

  return {
    props: {
      repos,
      gists,
      articles,
    },
  }
}
