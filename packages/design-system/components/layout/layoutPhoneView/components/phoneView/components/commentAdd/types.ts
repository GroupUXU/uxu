import type {Comment} from "utils";

export type CommentAddProps = {
    onCommentAdd: (data: Partial<Comment>) => Promise<boolean>;
}
