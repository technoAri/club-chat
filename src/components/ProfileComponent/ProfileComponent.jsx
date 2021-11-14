import React, { useState, useEffect } from "react";
import styles from "./ProfileComponent.module.scss";
import LeftDrawer from "../../helperComponents/LeftDrawer/LeftDrawer";
import ProfileMain from "../../helperComponents/ProfileMain/ProfileMain";

function ProfileComponent() {
  return (
    <div className={styles.profilebody}>
      <LeftDrawer />
      <ProfileMain />
    </div>
  );
}

export default ProfileComponent;
