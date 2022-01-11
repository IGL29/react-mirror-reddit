import React from 'react';
import cn from 'classnames';
import styles from './profileBlock.scss';
import { Icons, EComponents } from '@shared/Icons';

interface IProfileBlockProps {
  className: string;
  userName?: string;
  avatarSrc?: string;
}

const ID = process.env.CLIENT_ID;

export default function ProfileBlock({
  className,
  userName,
  avatarSrc,
}: IProfileBlockProps): JSX.Element {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className={cn(styles.button, className)}
    >
      {avatarSrc ? (
        <img className={styles.avatar} src={avatarSrc} alt={userName} />
      ) : (
        <Icons
          name={EComponents.AvatarIcon}
          className={cn(styles.img, styles.avatar)}
        />
      )}

      <p className={styles.text}>{userName || 'Аноним'}</p>
    </a>
  );
}
