import "./style.scss";

export type GithubProfileType = {
    login: string
    avatar_url: string
    html_url: string
    followers: number
    following: number
    name: string
    bio: string
}

type GithubProfileProps = {
    profile: GithubProfileType | undefined
}


export function GithubProfile({ profile } : GithubProfileProps) {
    const repositoriesURL = `${profile?.html_url}?tab=repositories`;
    
    return (
        <div className="profile-container">
            <img src={profile?.avatar_url} alt="Github Avatar URL"/>
            <p className="name">{profile?.name}</p>
            <p className="login">@{profile?.login}</p>
            <div>
                <p>Followers: {profile?.followers}</p>
                <p>Following: {profile?.following}</p>
            </div>
            {profile?.bio && <p className="bio text">{profile?.bio}</p>}
            <div>
                <a target="_blank" rel="noreferrer" 
                href={profile?.html_url}>Go to profile</a>

                <a target="_blank" rel="noreferrer" 
                href={repositoriesURL}>Go to repositories</a>
            </div>
        </div>
    );
}