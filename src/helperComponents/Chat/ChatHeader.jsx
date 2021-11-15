import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ChatMain.module.scss";

export default function LeftDrawer() {
    return (
        <div className={styles.chatheader}>
            <div>Welcome Ayush</div>
            <div>Logout</div>
        </div>
    )
}