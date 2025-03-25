import React from 'react';

interface ContainerProps extends React.PropsWithChildren<{}> {
  className?: string;
}

export default function Container(props: ContainerProps) {
  return <div className={`container ${props.className}`}>{props.children}</div>;
}
