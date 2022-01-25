import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { IDropdownProps } from './interfaces';
import styles from './dropDown.scss';

const NOOP = () => {
};

const DropDown: React.FC<IDropdownProps> = ({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  // const node = document.getElementById('dropdown_root');

  // if (!node) return null

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  // return ReactDOM.createPortal((
   return <div className={styles.dropdown}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <>
          <div className={styles['dropdown__list-container']} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </>
      )}
    </div>
  // ), node)
}

export default DropDown;
