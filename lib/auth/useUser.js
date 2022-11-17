import useSWR from 'swr';
import {useEffect} from "react";
import Router from "next/router";

export default function useUser({
    redirectTo = '',
    redirectIfFound = false
} = {}) {
    const {data: user, mutate: mutateUser} = useSWR(`${process.env.NEXT_PUBLIC_APP_HOSTNAME}/api/user`);

    useEffect(() => {
        if (!redirectTo || !user) return;

        if (
            (redirectTo && !redirectIfFound && !user?.isLogged) ||
            (redirectIfFound && user?.isLogged)) {

            Router.push(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo])

    return { user, mutateUser };
}