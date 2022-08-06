import React from "react";
import Layout from "../../components/layout";
import notFound from "../../Images/404.png";
const NotFound = () => {
  return (
    <Layout>
      <div className="col-md-12 pt-5 d-flex justify-content-center">
        <img src={notFound} alt="Not Found" />
      </div>
    </Layout>
  );
};
export default NotFound;
