import React from 'react';

// Uncontrolled
import { Comment } from '@shared/Comment';
// Controlled
import { ControlledComment } from '@shared/ControlledComment';

import styles from './styles.scss'
import { useComments } from '../../hooks/useComments';

const CommentsSection = ({permalinkComments}: {permalinkComments: string}) => {
  const [commentsData] = useComments(permalinkComments)

  return (
    <div>
      <div className={styles.sortWrap}>
        <p className={styles.sortText}>Сортировать по:</p>
      </div>

      {/* Uncontrolled */}

      {/* {commentsData ? commentsData?.[1]?.data?.children.map((commentData) => <Comment data={commentData.data} /> ): <p className={styles.loader}>Загружаем...</p>} */}

      {/* // Controlled */}

      {commentsData ? commentsData?.[1]?.data?.children.map((commentData) => <ControlledComment data={commentData.data} /> ): <p className={styles.loader}>Загружаем...</p>}
    </div>
  )
}

export default CommentsSection;
