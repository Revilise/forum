import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import Search from "../components/search/Search";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ConferenceList from "../components/conference-list/ConferenceList";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react'

export const getServerSideProps = redirectUnauthorized;

const links = [
    { href: "/", text: "all" },
    { href: "/my-conferences", text: "my conferences"},
    { href: "/part-in", text: "part in conferences"}
]

export default function IndexPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get( process.env.NEXT_PUBLIC_APP_HOSTNAME + '/api/conferences/get-conferences-list')
            .then(res => {
                setItems(res.data)
            })
            .catch(er => console.error(er))
    }, [])

    return (
        <Layout title={"forum"} sidebar={roleTypes.user}>
            <Layout.Content>
                <Layout.HorizontalPanel>
                    <Search />
                    <Breadcrumb items={links} />
                </Layout.HorizontalPanel>
                <ConferenceList items={items} />
            </Layout.Content>
        </Layout>
    )
}