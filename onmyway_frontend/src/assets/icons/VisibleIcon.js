import Svg, { Path } from 'react-native-svg';

export default function VisibleIcon() {

    return (
        <Svg
            width={30}
            height={38}
            viewBox="0 0 130 140"
            style={{
                borderBottomWidth: 0.2, borderColor: 'rgba(0,0,0, 0.7)'
            }}
            fill='#858585'
        >
            <Path d="M97.204 45.788c-.865-1.02-21.537-24.945-47.963-24.945-26.427 0-47.098 23.925-47.965 24.946a5.307 5.307 0 0 0 .001 6.904c.866 1.02 21.537 24.944 47.964 24.944 26.426 0 47.098-23.926 47.964-24.946a5.306 5.306 0 0 0-.001-6.903zM57.313 35.215c1.777-.97 4.255.143 5.534 2.485 1.279 2.343.875 5.029-.902 5.999-1.776.971-4.255-.143-5.535-2.485-1.278-2.343-.875-5.029.903-5.999zm-8.072 33.754c-18.46 0-33.995-14.177-39.372-19.729 3.631-3.75 11.898-11.429 22.567-16.021a19.995 19.995 0 0 0-3.301 11.021c0 11.104 9.001 20.105 20.105 20.105s20.106-9.001 20.106-20.105c0-4.072-1.219-7.855-3.3-11.021C76.715 37.812 84.981 45.49 88.612 49.24 83.235 54.795 67.7 68.969 49.241 68.969z" />
        </Svg >
    );
}