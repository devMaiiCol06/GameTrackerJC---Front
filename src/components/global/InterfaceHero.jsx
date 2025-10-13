import styles from "../../styles/modules/components/InterfaceHero.module.css";

const InterfaceHero = ({ context }) => {
    const contentsHero = [
        {
            title: "Game Library",
            label: "Manage and explore your gaming collection",
            context: "library",
        },
        {
            title: "Gaming Statistics",
            label: "Comprehensive overview of your gaming journey",
            context: "stats",
        },
    ];

    return (
        <div className={styles.interfaceHeroContainer}>
            {contentsHero
                .filter((cont) => context === cont.context)
                .map((cont) => (
                    <div key={cont.title}>
                        <h2>{cont.title}</h2>
                        <p>{cont.label}</p>
                    </div>
                ))}
        </div>
    );
};

export default InterfaceHero;
