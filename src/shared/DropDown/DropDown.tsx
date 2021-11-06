import React, {useEffect, useState} from 'react';
import styles from './dropDown.scss';
import {IDropdownProps} from './interfaces';

const NOOP = () => {
};

export default function DropDown({
                                   button,
                                   children,
                                   isOpen,
                                   onOpen = NOOP,
                                   onClose = NOOP
                                 }: IDropdownProps): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  return (
    <div className={styles.dropdown}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles['dropdown__list']} onClick={() => setIsDropdownOpen(false)}>
          {children}
        </div>
      )}
    </div>
  )
}
