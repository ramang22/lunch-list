import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

export default class Yummy extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="https://yummycantina.sk/prevadzky/yummy-1/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🤮 Yummy</span>
              </a >

            </div>
            <InfoBoard distance="Hned dole " link="" time="1" />

            <div className={styles.column}>
              <iframe src="https://yummycantina.sk/wp-content/uploads/2020/07/27-31.7.2020-1.pdf#toolbar=0&navpanes=0&scrollbar=0" width="100%" height="630px" scrolling="no">
              </iframe>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
