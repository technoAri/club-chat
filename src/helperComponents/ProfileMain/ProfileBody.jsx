import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ProfileMain.module.scss";
import plus from "../../../public/plusicon.svg";

export default function ProfileBody({ props }) {
    const { username, email, totalChat, totalTopicsFollowing } = props;
    return (
        <div className={styles.profilebody}>
            <div className={styles.profilebodytop}>
                <div className={styles.profileinfo}>
                    <div>
                        <div className={styles.username}><span>{username}</span></div>
                        <br />
                        <div className={styles.email}><span>{email}</span></div>
                        <br /><br />
                        <div className={styles.totalchat}><span>Total Chat - {totalChat}</span></div>
                        <br />
                        <div className={styles.totalfollowing}><span>Total Topics Following - {totalTopicsFollowing}</span></div>
                    </div>
                </div>
                <div className={styles.profileimage}>
                    <Image src={plus} alt="plus_icon" layout="intrinsic" width={200} height={200} />
                </div>
            </div>
            <div className={styles.profilebodybottom}></div>
        </div>
    )
}
