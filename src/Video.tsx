import {Composition} from 'remotion';
import {MyComposition} from './Composition';

import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Videos-4"
				component={MyComposition}
				durationInFrames={10 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					count: 4,
				}}
			/>
			<Composition
				id="Videos-8"
				component={MyComposition}
				durationInFrames={10 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					count: 8,
				}}
			/>
			<Composition
				id="Videos-12"
				component={MyComposition}
				durationInFrames={10 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					count: 12,
				}}
			/>
			<Composition
				id="Videos-16"
				component={MyComposition}
				durationInFrames={10 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					count: 16,
				}}
			/>
		</>
	);
};
