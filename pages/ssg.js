import axios from "axios";

const Ssg = ({ datas }) => {
  const listData = datas.map((data) => <li key={data._id}>{data.name}</li>);
  return (
    <div>
      <ul>{listData}</ul>
    </div>
  );
  // console.log(datas);
  // return <div>Halo</div>;
};

export async function getStaticProps() {
  const res = await axios.get(
    "https://marksterben-item-list-api.herokuapp.com/api/items"
  );

  return { props: { datas: res.data.items } };
}

export default Ssg;
