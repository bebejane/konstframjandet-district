import s from './[project].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { apiQueryAll } from '/lib/utils';
import { apiQuery } from "dato-nextjs-utils/api";
import { ProjectDocument, AllProjectsDocument } from "/graphql";
import { MetaSection, Article } from '/components';
export type Props = {
  project: ProjectRecord
}

export default function ProjectItem({ project: { id, _createdAt, title, subpage, image, intro, content }, project }: Props) {

  return (
    <>
      <MetaSection>
        <h3>{title}</h3>
        <ul className={s.submenu}>
          {subpage.map(({ slug, title }) =>
            <li>{title}</li>
          )}
        </ul>
      </MetaSection>
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
  const { projects } = await apiQueryAll(AllProjectsDocument)
  const paths = projects.map(({ slug }) => ({ params: { project: slug } }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const slug = context.params.project;
  const { project } = await apiQuery(ProjectDocument, { variables: { slug, districtId: props.district.id }, preview: context.preview })

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