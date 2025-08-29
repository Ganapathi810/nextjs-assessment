export const CircularProgressBar = ({ progress }: { progress: number }) => {
    const radius = 65;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                stroke="#565E63"
                className="opacity-20"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="#27BBF5" 
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeLinecap="round"
                className="transition-all duration-500 ease-in-out"
                transform={`rotate(-90 ${radius} ${radius})`}
            />
            <text
                x="52%"
                y="52%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-xl font-semibold fill-slate-700"
            >
                {progress}%
            </text>
        </svg>
    );
}