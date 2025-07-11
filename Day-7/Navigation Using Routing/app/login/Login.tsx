interface Props {
    params: {
        username: string;
    };
}

export default function UserLogin({ params }: Props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Hello {params.username} 👋</h1>
            <p>Welcome to your personalized dashboard</p>
            <img
                src={`https://ui-avatars.com/api/?name=${params.username}&background=random`}
                alt="User Avatar"
                width={150}
                style={{ borderRadius: "50%" }}
            />
        </div>
    );
}
