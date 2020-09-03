import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import LunchRow from '../LunchRow';
import axios from 'axios';
import { apiUrl } from '../ApiConstants'

interface IVegLife {

}

interface VegState {
  menu?: object;
  loaded : boolean;
}

export default class Veglife extends React.Component<IVegLife, VegState> {


  constructor(props) {
    super(props);
    this.state = {
      menu: this.getMenuItems(),
      loaded : false
    }
  }

  async getApiCall(url: string): Promise<object> {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getMenuItems() : Promise<object>{
    let response = await this.getApiCall(apiUrl + "veglife")
    this.setState({
      loaded : true,
      menu: response['data']
    })
    
    return response['data']
  }


  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="http://www.veglife.sk/sk/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🥕 VegLife</span>
              </a >

            </div>
            <InfoBoard distance="1,4" link="https://goo.gl/maps/zfJtEif8zxnfvZww8" time="18" />

            {(this.state.loaded == true) ? (
            <LunchRow menuNumber="Polievka" price={null} menu={this.state.menu['soup']} />
            ) : (
              <div></div>
            )}
            {(this.state.loaded == true) ? (
               
                this.state.menu['foods'].map((item, index) =>
                <LunchRow menuNumber={"Menu " + (index + 1)} price={item['price']} menu={item['name']} />
              )
            ) : (
                <div></div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
