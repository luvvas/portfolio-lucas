import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'
import { ProjectsList } from './projects-list'

const getPageData = async () => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  )
}
