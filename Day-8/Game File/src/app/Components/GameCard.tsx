interface GameCardProps {
    title: string;
    link: string;
}

export default function GameCard({ title, link }: GameCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white block p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
            <h2 className="text-xl font-bold text-center text-gray-800">{title}</h2>
        </a>
    );
}
