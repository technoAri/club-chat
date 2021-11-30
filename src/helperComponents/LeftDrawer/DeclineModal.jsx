import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NextModal from 'react-modal';
import Image from "next/image";
import styles from "./LeftDrawer.module.scss";
import cross from "../../../public/cross.svg";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '425px',
        height: '190px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#19181d',
        margin: '0',
        padding: '0',
    },
};

export default function DeclineModal({ props }) {
    const { declineModal, setDeclineModal } = props;
    return (
        <div>
            <NextModal
                isOpen={declineModal}
                onRequestClose={() => setDeclineModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className={styles.closebtn}>
                    <button onClick={() => setDeclineModal(false)}>
                        <Image src={cross} alt="plus_icon" layout="intrinsic" width={35} height={35} />
                    </button>
                </div>
                <div className={styles.modaltext}>
                    {`This topic is already added.`}
                </div>
                <div className={styles.modalbtn}>
                    <button onClick={() => setDeclineModal(false)}>Okay</button>
                </div>
            </NextModal>
        </div>
    )
}
