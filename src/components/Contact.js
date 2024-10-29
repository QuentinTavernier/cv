import {ButtonComponent} from "./ButtonComponent";

export const Contact = () => {
    return (
        <div className="d-flex-col md:d-flex-row gap-2">
            <ButtonComponent
                variant="contained"
                icon="email"
                text="tavernier.q@gmail.com"
                onClick={() => window.open('mailto:tavernier.q@gmail.com')}
            />
            <ButtonComponent
                isLinkedInIcon
                onClick={() => window.open('https://www.linkedin.com/in/quentin-tavernier-a5a01316a/')}
            />
            <ButtonComponent
                isGitHubIcon
                onClick={() => window.open('https://github.com/QuentinTavernier/')}
            />
        </div>
    )
}
