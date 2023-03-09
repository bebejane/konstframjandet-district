import s from './SectionHeader.module.scss'
import cn from 'classnames'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuItem } from '/lib/menu'
import { usePage } from '/lib/context/page'
import useStore from '/lib/store'

export type SectionHeaderProps = {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {

  return (

    <header className={cn(s.header)}>
      {title}
    </header>
  )
}