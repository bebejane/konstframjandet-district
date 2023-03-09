import s from './Layout.module.scss'
import React, { useEffect, useState } from 'react'
import { Content, MetaSection, Footer, Logo, Grid, Menu, Language, FullscreenGallery, SearchResult } from '/components'
import type { MenuItem } from '/lib/menu'
import { buildMenu } from '/lib/menu'
import { useRouter } from 'next/router'
import { useStore } from '/lib/store'
import { usePage } from '/lib/context/page'
import { Image } from 'react-datocms'

export type LayoutProps = {
	children: React.ReactNode,
	menu: MenuItem[],
	footer: any
	title: string
	districts: DistrictRecord[]
}

export default function Layout({ children, menu: menuFromProps, footer, title, districts }: LayoutProps) {

	const router = useRouter()
	const { district } = usePage()
	const [menu, setMenu] = useState(menuFromProps)
	const [images, imageId, setImageId, searchQuery] = useStore((state) => [state.images, state.imageId, state.setImageId, state.searchQuery])

	return (
		<>
			<Content menu={menu} title={title}>
				{children}
			</Content>
			<Menu districts={districts} />
			<Logo />
			<Footer footer={footer} menu={menu} key={router.asPath} />
			<FullscreenGallery
				index={images?.findIndex((image) => image?.id === imageId)}
				images={images}
				show={imageId !== undefined}
				onClose={() => setImageId(undefined)}
			/>

			<Grid />
		</>
	)
}