import s from './[...project].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { apiQueryAll } from '/lib/utils';
import { apiQuery } from "dato-nextjs-utils/api";
import { ProjectDocument, ProjectSubpageDocument, AllProjectsDocument } from "/graphql";
import { Aside, Article } from '/components';
import Link from 'next/link';

export type Props = {
  project: ProjectRecord | ProjectSubpageRecord
}

export default function ProjectItem({ project: { id, _createdAt, title, slug, image, intro, content }, project }: Props) {

  return (
    <>
      <Aside>
        <h3>{title}</h3>
        {project.__typename === 'ProjectRecord' &&
          <ul className={s.submenu}>
            {project.subpage.map(({ id, slug: subslug, title }) =>
              <li key={id}>
                <Link href={`/projekt/${slug}/${subslug}`}>{title}</Link>
              </li>
            )}
          </ul>
        }
      </Aside>
      <Article
        id={id}
        title={title}
        intro={intro}
        content={content}
        record={project}
        date={_createdAt}
      />
    </>
  );
}

export async function getStaticPaths() {
  const { projects }: { projects: ProjectRecord[] } = await apiQueryAll(AllProjectsDocument)
  const paths = []

  projects.forEach(({ slug, subpage }) => {
    paths.push({ params: { project: [slug] } })
    subpage.forEach(({ slug: subslug }) => paths.push({ params: { project: [slug, subslug] } }))
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {
  console.log(context.params.project)
  const isSubpage = context.params.project.length === 2
  const slug = context.params.project[!isSubpage ? 0 : 1]
  const { project } = await apiQuery(!isSubpage ? ProjectDocument : ProjectSubpageDocument, { variables: { slug, districtId: props.district.id }, preview: context.preview })

  if (!project)
    return { notFound: true }

  return {
    props: {
      ...props,
      project,
      page: {
        title: project.title,
        image: project.image,
        intro: project.intro,
        layout: 'project'
      }
    }
  };
});