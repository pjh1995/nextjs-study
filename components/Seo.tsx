import Head from "next/head";

const Seo = ({ title }: { title?: string }) => {
  return <Head> {title} | Next Muvies </Head>;
};

export default Seo;
