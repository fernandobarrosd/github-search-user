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
        <div className="flex flex-col items-center
        max-w-[300px] w-full mt-[30px]">
            <img src={profile?.avatar_url} alt="Github Avatar URL"
            className="h-[110px] rounded-[50%]
            bg-[rgb(67, 57, 57)]"/>
            <div className="my-4 mb-6 flex flex-col gap-2">
                <p className=" text-white text-[15px] w-full text-center">
                    {profile?.name}
                </p>
                <p className="text-white font-bold w-full text-center">
                    @{profile?.login}
                </p>
            </div>
            
            <div className="flex gap-2.5 mt-2.5">
                <p className="bg-white p-2.5 rounded-[4px]">
                    Followers: {profile?.followers}
                </p>
                <p className="bg-white p-2.5 rounded-[4px]">
                    Following: {profile?.following}
                    
                </p>
            </div>
            {profile?.bio && 
            <p className="w-[250px] text-center mt-5
            text-[14px] bg-white p-2.5 rounded-[4px]">
                {profile?.bio}
            </p>}
            <div className="flex gap-2.5 mt-2.5">
                <a target="_blank" rel="noreferrer"
                className="bg-[#A367B1]
                p-2 rounded-[4px] no-underline
                mt-5 text-white
                text-[14px]" 
                href={profile?.html_url}>Go to profile</a>

                <a target="_blank" rel="noreferrer"
                className="bg-[#A367B1]
                p-2 rounded-[4px] no-underline
                mt-5 text-white
                text-[14px]"  
                href={repositoriesURL}>Go to repositories</a>
            </div>
        </div>
    );
}