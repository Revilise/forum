import cl from './logo.module.scss';
import React from "react";

const Content = () => <><span className={cl.span}>4</span>RUM</>

export default function Logo({level}) {
    return (
        <div className={cl.logo}>
            { React.createElement(`h${level}`, null, [<Content />] ) }
        </div>
    )
}