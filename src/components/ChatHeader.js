import React from 'react';

import { EditLocationRounded, HelpRounded, NotificationsRounded, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons';

import './ChatHeader.css';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    Youtube
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsRounded />
                <EditLocationRounded />
                <PeopleAltRounded />

                <div className="chatHeader__search">
                    <input type="text" placeholder="Search" />
                    <SearchRounded />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    );
};

export default ChatHeader;