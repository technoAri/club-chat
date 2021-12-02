import React from 'react';
import { useUser } from '../lib/hooks';
import TopicsComponent from '../ui/components/ToipcsComponents/TopicsComponent';

export default function topics() {
    useUser({ redirectTo: '/chat', redirectIfFound: true })
    return (
        <TopicsComponent />
    )
}
