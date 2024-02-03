import "./style.scss";

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
        <div className="social-networks">
        { links.map(({ id, url, Icon }) => (
          <a target="_blank" rel="noreferrer" href={url} key={id} >
            <Icon />
          </a>
        )) }
      </div>
    );
}