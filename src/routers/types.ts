import React from 'react';

export interface LeftMenuConfig {
   icon: JSX.Element | string;
}
export interface RouteConfig {
   title?: string;
   path: string;
   component: JSX.Element;
   layout?: React.ElementType;
   leftMenuConfig?: LeftMenuConfig;
}
