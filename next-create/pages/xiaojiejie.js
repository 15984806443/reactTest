import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Xiaojiejie = ({ router, data }) => {
  return (
    <>
      <div>{router.query.name}</div>
      <Link href="/">
        <a>返回首页</a>
      </Link>
    </>
  );
};

Xiaojiejie.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios("http://localhost/blog/manage/live2d/getLive2d.php?from=0").then(
      res => {
        resolve(res.data.data);
      }
    );
  });

  return await promise;
};

export default withRouter(Xiaojiejie);
