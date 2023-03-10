"use client";

import { useStore } from "@/src/store";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { isMovieListOpen } = useStore((state) => state);
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.brandname_container}>
        <h4>Movies Project</h4>
      </div>
      <div className={styles.menu_container}>
        <Link
          onClick={() => {
            useStore.setState({ isMovieListOpen: true });
          }}
          href={{
            pathname: "/trailers",
            query: { category: "now_playing", page: 1 },
          }}
        >
          <span>Now Playing</span>
        </Link>
        <Link
          onClick={() => {
            useStore.setState({ isMovieListOpen: true });
          }}
          href={{
            pathname: "/trailers",
            query: { category: "popular", page: 1 },
          }}
        >
          <span>Popular</span>
        </Link>
        <Link
          onClick={() => {
            useStore.setState({ isMovieListOpen: true });
          }}
          href={{
            pathname: "/trailers",
            query: { category: "top_rated", page: 1 },
          }}
        >
          <span>Top Rated</span>
        </Link>
        <Link
          onClick={() => {
            useStore.setState({ isMovieListOpen: true });
          }}
          href={{
            pathname: "/trailers",
            query: { category: "upcoming", page: 1 },
          }}
        >
          <span>Upcoming</span>
        </Link>
      </div>
      <div className={styles.profile_container}>
        <h3>Guest</h3>
        {path !== "/" ? (
          <button
            onClick={() =>
              useStore.setState({
                isMovieListOpen: !isMovieListOpen ? true : false,
              })
            }
            className={styles.menu_icon}
          >
            {!isMovieListOpen ? "Menu" : "Close"}
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
