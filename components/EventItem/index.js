import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

const IMAGE_PLACEHOLDER = "/images/event-default.png";

const EventItem = ({ item }) => {
  return (
    <Link href={`/events/${item.slug}`}>
      <a>
        <div className={styles.event}>
          <div className={styles.img}>
            <Image
              src={item.image ? item.image : IMAGE_PLACEHOLDER}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className={styles.info}>
            <span>
              {item.date} at {item.time}
            </span>
            <h4>{item.name}</h4>
          </div>
          <div className={styles.link}>
            <Link href={`/events/${item.slug}`}>
              <a>Details </a>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default EventItem;
