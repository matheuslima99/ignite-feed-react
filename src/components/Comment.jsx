import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio ás 08:13h" dateTime="22-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onMouseDown={handleDeleteComment}
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            aplaudir
            <span>10</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
