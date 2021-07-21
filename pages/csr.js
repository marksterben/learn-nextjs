import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  const res = await axios.get(url);
  return res.data.items;
};

export default function Csr() {
  const { data: datas, error } = useSWR(
    "https://marksterben-item-list-api.herokuapp.com/api/items",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!datas) return <div>loading...</div>;

  const listData = datas.map((data) => <li key={data._id}>{data.name}</li>);

  return (
    <div>
      <ul>{listData}</ul>
    </div>
  );
}
