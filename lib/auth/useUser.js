import useSWR from 'swr';
import {useEffect} from "react";
import Router from "next/router";

export default function useUser({
    redirectTo = '',
    redirectIfFound = false
} = {}) {
    const {data, mutateUser} = useSWR(`${process.env.NEXT_PUBLIC_APP_HOSTNAME}/api/user`);
    const user = data;

    useEffect(() => {
        if (!redirectTo || !user) return;

        if (
            (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
            (redirectIfFound && user?.isLoggedIn)) {
            Router.push(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo])

    return { user, mutateUser };
}