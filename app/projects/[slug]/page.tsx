import { ProjectDetails } from '@/app/components/pages/project/project-details'

import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'

import { ProjectPageData } from '@/app/types/page-info'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Project( { params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug)

  return (
    <>
      <ProjectDetails project={project} />
    </>
  )
}
