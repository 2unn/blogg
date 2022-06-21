import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/index";
import CardList from "../component/Card";
import { apolloClient } from "../lib/apolloClient";
import { getBlogs } from "../lib/queries";

interface IAuthor {
  id: String;
  name: String;
}

interface IHome {
  data: Array<{
    id: String;
    title: String;
    description: String;
    author: IAuthor;
  }>;
}

const Home: React.FC<IHome> = ({ data }) => {
  return (
    <Layout>
      <CardList data={data} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: getBlogs,
  });

  return {
    props: {
      data: data.blogs,
    },
  };
}

export default Home;
export type { IHome };
