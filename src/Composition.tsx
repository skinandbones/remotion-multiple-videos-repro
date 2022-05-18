import {Freeze, useCurrentFrame} from 'remotion';
import {useEffect, useState} from 'react';
import {
	continueRender,
	delayRender,
	Loop,
	staticFile,
	useVideoConfig,
	Video,
} from 'remotion';
import {getVideoMetadata, VideoMetadata} from '@remotion/media-utils';

const STOCK_VIDEOS = [
	'videos/production ID_4880483.mp4',
	'videos/pexels-alena-darmel-8155845.mp4',
	'videos/production ID_4880486.mp4',
	'videos/pexels-andre-taissin-6008065.mp4',
	'videos/production ID_5106775.mp4',
	'videos/pexels-balloon-540p.mp4',
	'videos/pexels-beytlik-9959514.mp4',
	'videos/pexels-ivan-khmelyuk-7222009.mp4',
	'videos/pexels-nicole-michalou-5754819.mp4',
	'videos/pexels-nothing-ahead-10505868.mp4',
	'videos/pexels-pool.mp4',
	'videos/pexels-swb-s-6971607.mp4',
	'videos/pexels-william-fortunato-6139267.mp4',
	'videos/production ID_4881636.mp4',
	'videos/pexels-karolina-grabowska-8116496.mp4',
	'videos/production ID_4881696.mp4',
	'videos/pexels-alena-darmel-8155904.mp4',
];

const useVideoMetaData = (src: string) => {
	const [videoMetadata, setVideoMetadata] = useState<VideoMetadata>({
		durationInSeconds: 0,
		width: 0,
		height: 0,
		aspectRatio: 1,
		isRemote: true,
	});

	const [handle] = useState(() =>
		delayRender(`Getting video metadata for: ${src}`)
	);

	useEffect(() => {
		getVideoMetadata(src).then((result) => {
			setVideoMetadata(result);
			continueRender(handle);
		});
	}, [handle, src]);

	return videoMetadata;
};

const VideoCard = ({src}: {src: string}) => {
	const {durationInSeconds} = useVideoMetaData(src);
	const {fps} = useVideoConfig();
	const durationInFrames = Math.floor(durationInSeconds * fps);
	const frame = useCurrentFrame();

	return (
		<div className="w-full h-full">
			{durationInFrames > 0 ? (
				<Loop durationInFrames={durationInFrames} layout="none">
					<Freeze frame={Math.floor(frame / 2.0) * 2.0}>
						<Video
							muted
							src={src}
							className="w-full h-full object-cover rounded-lg shadow"
						/>
					</Freeze>
				</Loop>
			) : null}
		</div>
	);
};
export const MyComposition = ({count}: {count: number}) => {
	return (
		<div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-pink-600 p-4 grid grid-cols-4 grid-rows-4 gap-4 place-items-center">
			{STOCK_VIDEOS.slice(0, count).map((src, i) => (
				<VideoCard key={`video-${i}`} src={staticFile(src)} />
			))}
		</div>
	);
};
