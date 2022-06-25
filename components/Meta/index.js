import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Music Events | Find the best music",
  description: "Find the latest dja nd other musical events",
  keywords: "music, dj, events, chill",
};

export default Meta;
