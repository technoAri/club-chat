import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import PropTypes from "prop-types";
import logo from "../../../public/logo.svg";
import plus from "../../../public/plusicon.svg";
import trending from "../../../public/trendingicon.svg";
import styles from "./LeftDrawer.module.scss";
import { setUserTopics, setTrendingTopics, setCurrentChatTopic } from "../../redux/action/topics.action";
import { getProfileData } from "../../redux/action/profile.action";
import { useSelector, useDispatch } from "react-redux";
import ConfirmModal from './ConfirmModal';

export default function LeftDrawer() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [topicItem, setTopicItem] = useState(null);
    const [currentChatTopicItem, setCurrentChatTopicItem] = useState(null);

    const router = useRouter();
    const dispatch = useDispatch();

    const userProfile = useSelector(
        (state) => state.profile
    );

    useEffect(() => {
        dispatch(getProfileData('qwerty'));
    }, []);

    const { isLoaded = false, profileData } = userProfile;

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setTopicItem(null);
        setIsOpen(false);
    }
    const userTopicsLists = useSelector(
        (state) => state.topics.userTopics
    );
    const trendingTopicsLists = useSelector(
        (state) => state.topics.trendingTopics
    );

    useEffect(() => {
        dispatch(setUserTopics('qwerty'));
        dispatch(setTrendingTopics());
    }, []);


    useEffect(() => {
        dispatch(setCurrentChatTopic(currentChatTopicItem));
        router.push('/chat')
    }, []);

    // const tr = useSelector(
    //     (state) => state.topics.currentChatTopic
    // );

    // useEffect(() => {
    //     console.log("TR", tr);
    // }, [tr]);

    useEffect(() => {
        console.log("TR", topicItem);
        if (topicItem && checkDuplication(topicItem)) {
            setIsOpen(true);
        }
    }, [topicItem]);

    const checkDuplication = (topicItem) => {
        const check = userTopicsLists.some(item => item.topic.id === topicItem.id);
        return !check;
    }

    return (
        <>
            <div className={styles.leftNav}>
                <div className={styles.logoDiv}>
                    <div className={styles.logocover}>
                        <Image src={logo} alt="Clubchat_logo" layout="responsive" width={211} height={175} />
                    </div>

                </div>
                {isLoaded && <div className={styles.profileName} onClick={() => { router.push('/profile') }}>
                    <span>{profileData.userProfile.username}</span>
                </div>}
                <div className={styles.addtopic}>
                    <button><span><Image src={plus} alt="plus_icon" layout="intrinsic" width={20} height={20} />
                        <span>Add Topic</span></span></button>
                </div>
                <div className={styles.yourtopics}>
                    <div className={styles.yourtopicsheading}><span><Image src={trending} alt="plus_icon" layout="intrinsic" width={20} height={20} />
                        <span>Your Topics</span></span></div>
                    <div className={styles.topicslist}>
                        {userTopicsLists && userTopicsLists.map(item => (
                            <span key={item.topic.id} onClick={() => { setCurrentChatTopicItem(item) }}>{item.topic.name}</span>
                        ))}
                    </div>
                </div>
                <div className={styles.trendingtopics}>
                    <div className={styles.trendingtopicsheading}><span><Image src={trending} alt="plus_icon" layout="intrinsic" width={20} height={20} />
                        <span>Trending Topics</span></span></div>
                    <div className={styles.trendingtopicslist}>
                        {trendingTopicsLists && trendingTopicsLists.map(item => (
                            <span key={item.id} onClick={() => setTopicItem(item)}>{item.name}</span>
                        ))}
                    </div>
                </div>
            </div>
            <ConfirmModal props={{ modalIsOpen, closeModal, topicItem, userId: '' }} />
        </>
    )
}
