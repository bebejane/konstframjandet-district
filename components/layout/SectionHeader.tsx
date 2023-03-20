import s from './SectionHeader.module.scss'
import cn from 'classnames'
import React, { useState, useEffect } from 'react'
import { usePage } from '/lib/context/page'
import useStore from '/lib/store'
import { Image } from 'react-datocms'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components'
import BalanceText from 'react-balance-text'

export default function SectionHeader() {

  const { title, subtitle, image, intro, layout, color } = usePage()

  return (
    <header className={cn(s.header, s[layout])}>
      <h1><BalanceText><span>{title}{subtitle && ` — ${subtitle}`}</span></BalanceText></h1>
      {image &&
        <figure>
          <Image
            data={image.responsiveImage}
            className={s.image}
            pictureClassName={s.image}
            objectFit="cover"
          />
        </figure>
      }
      {intro &&
        <Markdown className={cn(s.intro, "intro")}>
          {intro}
        </Markdown>
      }
      {color &&
        <div className={s.bgcolor} style={{ backgroundColor: color }}></div>
      }
    </header>
  )
}