import Link from "next/link";
import Router from "next/router";

const Home = () => {
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete
  // Router.events.on("routeChangeStart", (...args) => {
  //   console.log("1.routeChangeStart", ...args);
  // });
  // Router.events.on("routeChangeComplete", (...args) => {
  //   console.log("2.routeChangeComplete", ...args);
  // });
  // Router.events.on("beforeHistoryChange", (...args) => {
  //   console.log("3.beforeHistoryChange", ...args);
  // });
  // Router.events.on("routeChangeError", (...args) => {
  //   console.log("4.routeChangeError", ...args);
  // });
  // Router.events.on("hashChangeStart", (...args) => {
  //   console.log("1.hashChangeStart", ...args);
  // });
  // Router.events.on("hashChangeComplete", (...args) => {
  //   console.log("2.hashChangeComplete", ...args);
  // });
  const gotoXiaojiejie = () => {
    Router.push({
      pathname: "/xiaojiejie",
      query: {
        name: "阿鱼"
      }
    });
  };
  return (
    <>
      <div>首页</div>
      <Link href={{ pathname: "/xiaojiejie", query: { name: "结衣" } }}>
        <a>选择结衣</a>
      </Link>
      <Link href="#xiaojiejie?name=井空">
        <a>选择井空</a>
      </Link>
      <button onClick={gotoXiaojiejie}>阿鱼</button>
    </>
  );
};

export default Home;
