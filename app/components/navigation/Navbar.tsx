import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.brandname_container}>
        <h4>Movies Project</h4>
      </div>
      <div className={styles.menu_container}>
        <Link href="/trailers?category=now_playing&page=1">
          <span>Now Playing</span>
        </Link>
        <Link href="/trailers?category=latest&page=1">
          <span>Latest</span>
        </Link>
        <Link href="/trailers?category=popular&page=1">
          <span>Popular</span>
        </Link>
        <Link href="/trailers?category=top_rated&page=1">
          <span>Top Rated</span>
        </Link>
        <Link href="/trailers?category=upcoming&page=1">
          <span>Upcoming</span>
        </Link>
      </div>
      <div className={styles.profile_container}>
        <h3>Guest</h3>
      </div>
    </nav>
  );
};

export default Navbar;
