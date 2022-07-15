import Svg, { Path } from 'react-native-svg';

export default function EditPenIcon() {

    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill='#858585'
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.28.611a23.123 23.123 0 0 0-10.56 0A13.565 13.565 0 0 0 .61 10.719a23.123 23.123 0 0 0 0 10.562 13.565 13.565 0 0 0 10.108 10.108 23.12 23.12 0 0 0 10.562 0A13.565 13.565 0 0 0 31.389 21.28a23.12 23.12 0 0 0 0-10.561A13.565 13.565 0 0 0 21.28.61Zm-4.174 8.714a3.938 3.938 0 1 1 5.569 5.57l-4.444 4.443a16.098 16.098 0 0 1-7.477 4.234l-.86.215a1.386 1.386 0 0 1-1.68-1.682l.214-.859a16.095 16.095 0 0 1 4.234-7.477l4.444-4.444Zm2.784.889c-.503 0-.985.2-1.34.555l-.645.645c-.063.506.19 1.214.828 1.853.64.638 1.347.891 1.854.828l.644-.645a1.896 1.896 0 0 0-1.34-3.236Zm-1.015 5.592a5.306 5.306 0 0 1-1.586-1.095 5.301 5.301 0 0 1-1.095-1.586l-2.088 2.088a14.052 14.052 0 0 0-3.644 6.325 14.053 14.053 0 0 0 6.325-3.644l2.088-2.088Z"
                fill="#005A9C"
            />
        </Svg>
    );
}