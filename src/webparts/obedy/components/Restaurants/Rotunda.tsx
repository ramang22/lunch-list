import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios'


export default class Rotunda extends React.Component {
  testVar: string;


 /* constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.testVar = "";
}*/



  /*handleClick () {
    // axios.get('https://restauracie.sme.sk/restauracia/pizzeria-rotunda_2316-ruzinov_2980/denne-menu')
     //.then(resp => {this.testVar = resp.data});
     //(document.getElementById("1")).load('http://www.mywebsite.com/portfolio.php', document.getElementsByClassName("dnesne_menu"));

     //return this.testVar;


     var iframe = document.getElementById("1");
     var elmnt = iframe.contentWindow.document.getElementsByClassName("dnesne_menu")[0];

     elmnt.style.display = "block";

     <iframe src="     https://restauracie.sme.sk/export/resmenu/2316" width="100%" height="600px">
              </iframe>


  }*/

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🏰 Rotunda</span>
              <div className={styles.iframeRotundaDiv}>
                <iframe src="https://restauracie.sme.sk/restauracia/pizzeria-rotunda_2316-ruzinov_2980/denne-menu" className={styles.iframeRotunda} scrolling="no" sandbox="">
                  </iframe>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
