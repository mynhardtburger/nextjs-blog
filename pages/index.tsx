import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, PostData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";

export default function Home({
  allPostsData,
}: {
  allPostsData: Array<PostData>;
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <span className={utilStyles.flexCenter}>
        <a href="https://www.linkedin.com/in/mynhardtb/">
          <Image
            priority
            src="/images/linkedin.svg"
            alt="linkedin"
            width={25}
            height={25}
          />
        </a>
        <a href="https://github.com/mynhardtburger">
          <Image
            priority
            src="/images/github.svg"
            alt="github"
            width={25}
            height={25}
          />
        </a>
      </span>
      <section className={utilStyles.headingMd}>
        <p>
          Software engineer based in Toronto with an interest in data parsing,
          integrations and automations. Maybe one day I'll be able to solve some
          of the problems from my previous life as a CPA.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
