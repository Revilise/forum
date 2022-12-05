import useSWR from "swr";

export default function useComments({ conference_id = "" }) {
    const { data: comments, mutate: mutateComments } = useSWR(`/api/comments/get-list/${conference_id}`)

    return { comments, mutateComments };
}