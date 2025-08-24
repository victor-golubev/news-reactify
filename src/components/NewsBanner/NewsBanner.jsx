import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
import Image from "../Image/Image";
import withSkeleton from "../../helpers/hoc/withSkeleton";

function NewsBanner({ item }) {
  return (
    <div className="styles.banner">
      <Image image={item.urlToImage} />
      <h3 className="styles.title">
        <a href={item.url} target="_blank">
          {item.title}
        </a>
      </h3>
      <p className="styles.extra">
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
