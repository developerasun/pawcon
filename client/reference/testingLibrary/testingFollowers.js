import React from 'react'
import FollowersList from '../FollowersList/FollowersList'
import TestingHeader from './testingHeader'

export default function TestingFollowers() {
    return (
        <div className="followers">
            <TestingHeader title="Followers" />
            <FollowersList />
        </div>
    )
}