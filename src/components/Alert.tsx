import React from 'react';
import cn from 'classnames';

import style from 'src/styles/components/Alert.module.scss';
import WarningIcon from './icons/WarningIcon';

export enum AlertType {
  WARNING,
}

type AlertProps = {
  type: AlertType;
  text: string;
  className?: string;
};

export default function Alert({ type, className, text }: AlertProps) {
  return (
    <section className={cn(style.alert, className, type == AlertType.WARNING ? style.warning : null)}>
      <WarningIcon className={style.icon} />
      <p>{text}</p>
    </section>
  );
}
