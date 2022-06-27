import { Layout, EventItem } from "@/components/index";
import { server } from "config";
import { useRouter } from "next/router";

const SearchPage = ({ events }) => {
  const { query } = useRouter();
  return (
    <Layout title={"SearchPage"}>
      <h1>{`Search Results for ${query.term}:`}</h1>
      {events.length === 0 && <h3>No events to display</h3>}
      {events.map((item) => {
        return <EventItem key={item.id} item={item.attributes} />;
      })}
    </Layout>
  );
};

export default SearchPage;

export const getServerSideProps = async ({ query: { term } }) => {
  try {
    const res = await fetch(`${server}/api/events?name_contains:${term}`);
    const events = await res.json();

    return {
      props: {
        events: events.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
