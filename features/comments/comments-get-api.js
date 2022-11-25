import Comments from "../../components/comments/Comments";
import useSWR from "swr";
import {useRouter} from "next/router";
import useComments from "../../lib/comments/useComments";

export function CommentsApi() {
    const { id } = useRouter().query;
    const { comments } = useComments({conference_id: id})

    return <Comments items={comments ?? []} />
}