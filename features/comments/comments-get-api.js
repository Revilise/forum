import Comments from "../../components/comments/Comments";
import useSWR from "swr";
import {useRouter} from "next/router";
import useComments from "../../lib/comments/useComments";

export function CommentsGetApi({conference_id}) {
    const { comments } = useComments({conference_id})

    return <Comments items={comments ?? []} />
}