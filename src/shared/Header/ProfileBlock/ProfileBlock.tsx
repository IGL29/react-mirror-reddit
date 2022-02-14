import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './profileBlock.scss';
import { Icons, EComponents } from '@shared/Icons';
import { useUserData } from '../../../hooks';
interface IProfileBlockProps {
  className: string;
}

const ID = process.env.CLIENT_ID;
const link = `https://www.reddit.com/api/v1/authorize?client_id=${ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`

export default function ProfileBlock({
  className,
}: IProfileBlockProps): JSX.Element {
  const {data, loading} = useUserData();
  console.log('data', data)
  const { iconImg, name } = data;

  return (
    <a
      href={link}
      className={cn(styles.button, className)}
    >
      {loading && 'Загрузка'}

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
