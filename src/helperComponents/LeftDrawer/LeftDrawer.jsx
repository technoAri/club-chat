import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import logo from "../../../public/logo.svg";
import plus from "../../../public/plusicon.svg";
import trending from "../../../public/trendingicon.svg";
import styles from "./LeftDrawer.module.scss";

export default function LeftDrawer() {
    return (
        <div className={styles.leftNav}>
            <div className={styles.logoDiv}>
                <div className={styles.logocover}>
                    <Image src={logo} alt="Clubchat_logo" layout="responsive" width={211} height={175} />
                </div>

            </div>
            <div className={styles.profileName}>
                <span>Ayush Saurav</span>
            </div>
            <div className={styles.addtopic}>
                <button><span><Image src={plus} alt="plus_icon" layout="intrinsic" width={20} height={20} />
                    <span>Add Topic</span></span></button>
            </div>
            <div className={styles.yourtopics}>
                <div className={styles.yourtopicsheading}><span><Image src={trending} alt="plus_icon" layout="intrinsic" width={20} height={20} />
                    <span>Your Topics</span></span></div>
                    <div className={styles.topicslist}>
                        <span>politics</span>
                        <span>politics1</span>
                        <span>politics2</span>
                        <span>politics3</span>
                    </div>
            </div>
            <div className={styles.trendingtopics}>
                <div className={styles.trendingtopicsheading}><span><Image src={trending} alt="plus_icon" layout="intrinsic" width={20} height={20} />
                    <span>Trending Topics</span></span></div>
                    <div className={styles.trendingtopicslist}>
                        <span>politics</span>
                        <span>politics1</span>
                        <span>politics2</span>
                        <span>politics3</span>
                    </div>
            </div>
        </div>
    )
}
