import * as React from 'react';
import styles from './App2019.module.scss';
import { IApp2019Props, IApp2019State } from './IApp2019Props';
import { escape } from '@microsoft/sp-lodash-subset';

import { 
  sp,
  ClientSidePage
} from '@pnp/sp';
import { SPHttpClient } from '@microsoft/sp-http';

export default class App2019 extends React.Component < IApp2019Props, IApp2019State > {

  constructor(props: IApp2019Props) {

    super(props);
    this.state = {
      url: '',
      title: ''
    };
  }

  private _getName() {
    let linkPage = this.props.context.pageContext.web.absoluteUrl;
    let restApi =`${linkPage}/_api/web?$select=Title`;
    this.setState({
      url: linkPage
    });
    this.props.context.spHttpClient.get(restApi, SPHttpClient.configurations.v1)
      .then(resp => { return resp.json(); })
      .then((web  => {
        this.setState({
          title: web.Title
        });
      }));
  }

  public componentDidMount(){
    this._getName();
  }

  public render(): React.ReactElement<IApp2019Props> {
    return(
      <div className = { styles.app2019 } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}> TITTLE PAGE :  {this.state.title}</p>
        <p className={styles.description}> LINK PAGE :  {this.state.url}</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
