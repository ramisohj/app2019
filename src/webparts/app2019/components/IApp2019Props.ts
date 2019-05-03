import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IApp2019Props {
  description: string;
  context: WebPartContext;
}

export interface IApp2019State{
  title: string;
  url: string;
}
