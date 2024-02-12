import { Lora } from "next/font/google";
const lora = Lora({
  weight: "400",
  subsets: ["latin"],
});
import styles from "@/styles/Blogs.module.scss";
import moment from "moment";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
async function getData() {
  const postFiles = fs.readdirSync(path.join("src", "blogPosts"));
  const posts = postFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "blogPosts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch data");
    // }

    // return res.json();
  });
  return posts;
}
// blog card component
const BlogCard = ({ post }: { post: any }) => {
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <p className={lora.className} style={{ marginTop: 8, marginBottom: 8 }}>
        {post.frontmatter.description}
      </p>
      <p style={{ color: "#818c93", fontSize: "12px" }}>
        {moment(post.frontmatter.date).format("DD MMM, YYYY")} •{" "}
        {post.frontmatter.readTime} min
      </p>
      {/* <p>{post.frontmatter.tags}</p> */}
    </div>
  );
};
export default async function Blogs() {
  const data = await getData();
  console.log(data);

  return (
    <main className="container">
      <div className={styles.pageInfo}>
        <h2 className={styles.pageHeading}>Blogs</h2>
        <p style={{ color: "#818c93", fontSize: "12px", marginTop: 12 }}>
          {moment().format("DD MMM, YYYY")} • {data.length} posts
        </p>
      </div>
      <ul className={styles.blogsList}>
        {data.map((itm: any, indx: number) => (
          <li key={indx}>
            <BlogCard post={itm} />
          </li>
        ))}
      </ul>
    </main>
  );
}
