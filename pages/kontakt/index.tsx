import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { DistrictDocument } from "/graphql";
import { Aside, Article } from "/components";

export type Props = {
  district: DistrictRecord
}

export default function Contact({ district: { id, intro, content }, district }: Props) {

  return (
    <>
      <Aside>
      </Aside>
      <Article
        id={id}
        record={district}
        intro={intro}
        content={content}
      />
    </>
  );
}

export const getStaticProps = withGlobalProps({ queries: [DistrictDocument] }, async ({ props, revalidate, context }: any) => {

  return {
    props: {
      ...props,
      page: {
        title: 'Kontakta oss'
      }
    },
    revalidate
  };
});