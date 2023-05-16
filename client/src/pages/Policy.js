import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Shopify"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">

        We respects the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.

        We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
