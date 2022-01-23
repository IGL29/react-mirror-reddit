import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './profileBlock.scss';
import { Icons, EComponents } from '@shared/Icons';
import { userContext } from '@shared/context/userContext';
interface IProfileBlockProps {
  className: string;
}

const ID = process.env.CLIENT_ID;
const link = `https://www.reddit.com/api/v1/authorize?client_id=${ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`

export default function ProfileBlock({
  className,
}: IProfileBlockProps): JSX.Element {
  const { iconImg, name } = useContext(userContext);

  return (
    <a
      href={link}
      className={cn(styles.button, className)}
    >
      {iconImg ? (
        <img className={styles.avatar} src={iconImg} alt={name} />
      ) : (
        <Icons
          name={EComponents.AvatarIcon}
          className={cn(styles.img, styles.avatar)}
        />
      )}

      <p className={styles.text}>{name || 'Аноним'}</p>
    </a>
  );
}
