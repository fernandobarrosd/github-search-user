type SocialNetworkType = {
    id: number
    url: string
    Icon() : JSX.Element
}

type SocialNetworksProps = {
    links: SocialNetworkType[]
}

export function SocialNetworks({ links } : SocialNetworksProps) {
    return (
        <div className="absolute right-[10px] flex mt-[10px] gap-5 top-[0] p-5">
        { links.map(({ id, url, Icon }) => (
          <a target="_blank" rel="noreferrer" href={url} key={id} >
            <Icon />
          </a>
        )) }
      </div>
    );
}