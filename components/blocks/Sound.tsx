import s from "./Sound.module.scss"
import cn from "classnames";

export type Props = { data: SoundRecord }

export default function Sound({ data: { url } }) {

	if (url.indexOf("soundcloud") === -1) return <p>Unsupported audio URL<br />{url}</p>

	const embedUrl = `https://w.soundcloud.com/player/?url=${url}&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=true`

	return (
		<p className={s.sound}>
			<iframe
				src={embedUrl}
				width="100%"
				height="auto"
				scrolling="no"
				frameBorder="no"
			/>
		</p>
	);
}