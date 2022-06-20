import { Container } from "react-bootstrap";
import Layout from "../layout";
import { useRouter } from "next/router";
import Image from "react-bootstrap/Image";
import { apolloClient } from "../lib/apolloClient";
import { GetStaticPropsContext } from "next";
import { getBlogs, getSingleBlog } from "../lib/queries";

const Post: React.FC<any> = ({ blog }) => {
  const data = blog.blog;

  let src: string;
  if (data.author.name === "Vietcetera") {
    src = "/vietcetera.webp";
  } else if (data.author.name === "VTV News") {
    src = "/vtv.png";
  } else if (data.author.name === "Nguyen Quan") {
    src = "/meo.webp";
  } else {
    src = "/newCat.avif";
  }

  return (
    <Layout>
      <Container className="yt-3 mb-5 text-center">
        <h1 className="mb-3">{data.title}</h1>
        <Image height="200px" className="yt-3  " src={src} />
      </Container>
      <Container className="yt-3 text-center">
        <p className="fs-6 font-monospace">{data.description}</p>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: getBlogs,
  });
  const pathList = data.blogs.map((post: { id: String }) => post.id);
  return {
    fallback: false,
    paths: pathList.map((val: String) => {
      return {
        params: {
          Post: val,
        },
      };
    }),
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const PostId = context.params;
  const { data } = await apolloClient.query({
    query: getSingleBlog,
    variables: { blogId: PostId?.Post },
  });
  return {
    props: {
      blog: data,
    },
  };
}

export default Post;
