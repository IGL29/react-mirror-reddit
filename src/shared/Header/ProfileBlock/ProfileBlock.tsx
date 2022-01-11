import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import axios from 'axios';
import styles from './profileBlock.scss';
import { Icons, EComponents } from '@shared/Icons';

interface IProfileBlockProps {
  className: string;
  token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;
}

const ID = process.env.CLIENT_ID;

export default function ProfileBlock({
  className,
  token,
}: IProfileBlockProps): JSX.Element {
  const [data, setData] = useState<IUserData>();

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        setData({ name: userData.name, iconImg: userData.icon_img });
      })
      .catch(console.log);
  }, [token]);
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className={cn(styles.button, className)}
    >
      {data?.iconImg ? (
        <img className={styles.avatar} src={data.iconImg} alt={data.name} />
      ) : (
        <Icons
          name={EComponents.AvatarIcon}
          className={cn(styles.img, styles.avatar)}
        />
      )}

      <p className={styles.text}>{data?.name || 'Аноним'}</p>
    </a>
  );
}
