import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
        <div className={styles.menu}>
          <svg className={styles.text} id="mySvg" width="1350" height="130">
            <g className={styles.layer}>
              <text className={styles.svg_1} x={500} y={100} >
                <animate attributeName="stroke-dasharray" values="450 0 0 450" dur="4s" repeatCount="1" />
                VOYAGES
              </text>
            </g>
          </svg>
        </div>
    </>
  );
}
