import './Hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe"><span>Вселенная: </span>{props.universe}</div>
            <div className="hero-alter_ego"><span>Альтер эго: </span>{props.alter_ego}</div>
            <div className="hero-occupation"><span>Род деятельности: </span>{props.occupation}</div>
            <div className="hero-friends"><span>Друзья: </span>{props.friends}</div>
            <div className="hero-superpowers"><span>Суперсилы: </span>{props.superpowers}</div>
            <img className="hero-img" src={props.url} />
            <div className="hero-more"><span>Подробнее: </span>{props.more}</div>
        </div>
    )
}

export default Hero;