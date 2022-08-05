import { useContext } from "react"
import { DictionaryContext } from "../../context/DictionaryContext"
import { WeatherContext } from "../../context/WeatherContext"

export const Header = () => {
    const { unitsOBJ , lenguageOBJ } = useContext(DictionaryContext);
    const { setUnits, loading , setLenguage, lenguage } = useContext(WeatherContext);

    const handleSelectedUnits = (event) => {
        setUnits(event.target.value);
    }

    const handleSelectedLenguage = (event) => {
        setLenguage(event.target.value);
    }
    if (loading) {
        return <div>Loading...</div>
    } else {
    return (
        <header className="header">
            <form action="">
                <label htmlFor="units" />
                <select name='units' id="units" onChange={() => handleSelectedUnits(window.event)}>
                {Object.keys(unitsOBJ).map((key) => <option value={unitsOBJ.key} key={key}>{key}</option>)}
                </select>
                <select name="lenguage" id="lenguage" onChange={() => handleSelectedLenguage(window.event)} >
                {Object.keys(lenguageOBJ).map((key) => <option value={lenguageOBJ[key]} key={key}>{key}</option>)}
                </select>
            </form>
        </header>
    )
    }
}    