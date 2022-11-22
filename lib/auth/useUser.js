import useSWR from 'swr';
import React, {useEffect} from "react";
import Router from "next/router";

export default function useUser ({
    redirectTo = '',
    redirectIfFound = false
} = {}) {
    const { data: user, mutate: mutateUser } = useSWR(`${process.env.NEXT_PUBLIC_APP_HOSTNAME}/api/user`)

    console.log("user")

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