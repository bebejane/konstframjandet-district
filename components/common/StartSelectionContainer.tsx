import s from './StartSelectionContainer.module.scss'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'

export type Props = {
  children?: React.ReactNode | React.ReactNode[],
  className?: string
}

export default function StartSelectionContainer({ children, className }: Props) {

  return (
    <section className={s.container}>
      <h2 className="mid">Aktuellt i distrikt</h2>
      <ul className={cn(s.container)}>
        {children}
      </ul>
    </section>
  )
}