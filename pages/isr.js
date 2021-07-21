import axios from "axios";

const Isr = ({ datas }) => {
  const listData = datas.map((data) => <li key={data._id}>{data.name}</li>);
  return (
    <div>
      <ul>{listData}</ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    "https://marksterben-item-list-api.herokuapp.com/api/items"
  );

  return { props: { datas: res.data.items }, revalidate: 60 };
}

export default Isr;
