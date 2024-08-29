import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/utils';
import { Comments } from '@/types/comments';
import { ChevronDown, ChevronUp, User2 } from 'lucide-react';
import { useState } from 'react';

interface Props {
  comments: Comments[];
}

export default function CommentsCourse({ comments }: Props) {
  const [visibleComments, setVisibleComments] = useState<number>(4);

  const handleShowMore = () => {
    setVisibleComments(10);
  };

  const handleShowLess = () => {
    setVisibleComments(4);
  };

  return (
    <div className="flex flex-col gap-2 ml-4">
      <span className="font-semibold">Reseñas</span>
      <div className="flex flex-col gap-6">
        {comments.slice(0, visibleComments).map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar className="mt-1">
              <AvatarImage
                src={
                  comment.expand?.user.avatar
                    ? getImageUrl({
                        url: comment.expand.user.avatar,
                        collectionId: comment.expand.user.collectionId,
                        id: comment.expand.user.id,
                      })
                    : ''
                }
              />
              <AvatarFallback>
                <User2 size="19" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm text-primary">
                {comment.expand?.user.name} {comment.expand?.user.lastname}
              </span>
              <p className="text-gray-500 text-xs">
                {new Date(comment.created).toLocaleDateString()}
              </p>
              <p className="text-sm">{comment.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {visibleComments < comments.length ? (
          <Button className="gap-2" variant="outline" onClick={handleShowMore}>
            Más reseñas
            <ChevronDown size="18" />
          </Button>
        ) : (
          <Button className="gap-2" variant="outline" onClick={handleShowLess}>
            Ocultar reseñas
            <ChevronUp size="18" />
          </Button>
        )}
      </div>
    </div>
  );
}
