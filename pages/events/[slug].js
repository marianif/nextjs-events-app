import { Layout } from "@/components/index";
import { server } from "config";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/Event.module.css";
import Image from "next/image";

const EventPage = ({ event }) => {
  const deleteEvent = async () => {
    console.log("delete");
  };

  return (
    <Layout title={event.name}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${event.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a onClick={deleteEvent} href="#" className={styles.delete}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image && (
          <div className={styles.image}>
            <Image src={event.image} width={960} height={600} />
          </div>
        )}
        <h3>Perfomers:</h3>
        <p>{event.performers}</p>
        <h3>Description:</h3>
        <p>{event.description}</p>
        <h3>Venue: {event.venue}</h3>
        <p>{event.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/events`);
  const events = await res.json();

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    // fallback: false ==> mostra 404 se la pagina non esiste
    // fallback: true ==> anche se il path non è stato generato durante la build tenta una nuova richiesta
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${server}/api/events/${slug}`);
  const event = await res.json();

  return {
    props: {
      event,
      revalidate: 1,
    },
  };
}

// // Runs at request time
// export const getServerSideProps = async ({ query: { slug } }) => {
//   const res = await fetch(`${server}/api/events/${slug}`);
//   const event = await res.json();

//   return {
//     props: {
//       event,
//     },
//   };
// };

export default EventPage;
