import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ProfileMain.module.scss";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

export default function ProfileMain() {
    return (
        <div className={styles.profilemain}>
            <ProfileHeader />
            <ProfileBody props={{ username: "Ayush Saurav", email: "abc@abc.com", totalChat: 108, totalTopicsFollowing: 121 }} />
        </div>
    )
}
