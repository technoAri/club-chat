import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import logo from "../../../public/logo.svg";
import plus from "../../../public/plusicon.svg";
import trending from "../../../public/trendingicon.svg";
import styles from "./LeftDrawer.module.scss";
import { setUserTopics, setTrendingTopics, setCurrentChatTopic } from "../../redux/action/topics.action";
import { useSelector, useDispatch } from "react-redux";

export default function LeftDrawer() {
    const userTopicsLists = useSelector(
        (state) => state.topics.userTopics
    );
    const trendingTopicsLists = useSelector(
        (state) => state.topics.trendingTopics
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserTopics('qwerty'));
        dispatch(setTrendingTopics());
    }, []);

    const setCurrentChatTopicMethod = (e) => {
        const tempTopic =  e.target.innerText;
        dispatch(setCurrentChatTopic(tempTopic));
    }
    const tr = useSelector(
        (state) => state.topics.currentChatTopic
    );
    
    useEffect(() => {
        console.log("TR", tr);
    }, [tr]);
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
                    {userTopicsLists && userTopicsLists.map(item => (
                        <span key={item.topic.id} onClick={setCurrentChatTopicMethod}>{item.topic.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.trendingtopics}>
                <div className={styles.trendingtopicsheading}><span><Image src={trending} alt="plus_icon" layout="intrinsic" width={20} height={20} />
                    <span>Trending Topics</span></span></div>
                <div className={styles.trendingtopicslist}>
                    {trendingTopicsLists && trendingTopicsLists.map(item => (
                        <span key={item.id}>{item.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
