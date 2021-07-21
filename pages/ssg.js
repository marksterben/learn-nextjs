import axios from "axios";
import Link from "next/link";

const Ssg = ({ datas }) => {
  const listData = datas.map((data) => <li key={data._id}>{data.name}</li>);
  return (
    <div>
      <Link href="/">
        <a>BACK</a>
      </Link>
      <ul>{listData}</ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    "https://marksterben-item-list-api.herokuapp.com/api/items"
  );

  return { props: { datas: res.data.items } };
}

export default Ssg;
