import { Layout, EventItem } from "@/components/index";
import { server } from "config";

const Home = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming Events!</h1>
      {events.length === 0 && <h3>No events to display</h3>}
      {events.map((item) => {
        return <EventItem key={item.id} item={item} />;
      })}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
};

// export const getServerSideProps = async () => {
//   const res = await fetch(`${server}/api/events`);
//   const events = await res.json();

//   return {
//     props: {
//       events,
//     },
//   };
// };
