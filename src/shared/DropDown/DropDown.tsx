import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { IDropdownProps } from './interfaces';
import styles from './dropDown.scss';
import { node } from 'webpack';

const NOOP = () => {
};

const DropDown: React.FC<IDropdownProps> = ({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
  position = {top: 0, left: 0},
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const [node, setNode] = useState<Element | null>(null);

  useEffect(() => {
    setNode(document.querySelector('#dropdown_root'))
  }, [])

  if (!node) return null

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  return ReactDOM.createPortal((
    <div className={styles.dropdown} style={{top: `${position.top}px`, left: `${position.left}px`, position: 'absolute'}}>
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
  ), node)
}

export default DropDown;
