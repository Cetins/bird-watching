import SightingCard from "./SightingCard";
import "./App.css"

const SightingsGrid = ({sightings, removeSighting}) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} />
    });
    
    return (
        <div className="sightingsGrid">
            {sightingsList}
        </div>
    );

}

export default SightingsGrid;