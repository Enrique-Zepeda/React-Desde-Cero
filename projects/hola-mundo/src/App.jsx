import './App.css/'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    // const formatUserName = (userName) => `@${userName}`
    return(
        <section className='App'>
        <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        Miguel Angel Duran
        </TwitterFollowCard>

        <TwitterFollowCard userName="bill">
        El Pelonchas
        </TwitterFollowCard>

        <TwitterFollowCard userName="jara">
        Daniel Jara
        </TwitterFollowCard>
        </section>
    )
}