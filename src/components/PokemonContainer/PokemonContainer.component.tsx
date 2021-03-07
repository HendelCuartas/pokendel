import "./pokemonContainer.styles.scss";

const PokemonContainer: React.FC = ({ children }) => {
    return (
        <div className="container">
          {children}
        </div>
    )
};

export default PokemonContainer;
