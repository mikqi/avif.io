import Archive from "@components/Archive";

import { useAvifInCloudflare as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInEdge as post3 } from "lib/meta";
import { useAvifInFirefox as post4 } from "lib/meta";
import { useAvifInFrameworks as post5 } from "lib/meta";
import { useAvifInGimp as post6 } from "lib/meta";
import { useAvifInHtml as post7 } from "lib/meta";
import { useAvifInNextjs as post8 } from "lib/meta";
import { useAvifInWindows as post9 } from "lib/meta";
import { useAvifInWordpress as post10 } from "lib/meta";

const posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10];

import { tutorials as postdata } from "lib/meta";
const filler = "";

export default function BlogAvif() {
  return (
    <Archive postdata={postdata} posts={posts}>
      {filler}
    </Archive>
  );
}