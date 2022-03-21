import "./menu-item.styles.scss";

import { RouteComponentProps, withRouter } from "react-router-dom";

import React from "react";

type IProps = {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
};

const MenuItem: React.FC<RouteComponentProps & IProps> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}) => (
  <a className={`${size} menu-item`} href={`${match.url}${linkUrl}`}>
    <div className="bg-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </a>
);

export default withRouter(MenuItem);
