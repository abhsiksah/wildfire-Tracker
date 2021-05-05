import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()                                                       // the api had many things but we wanted only events array from it so we destructred it down to events 

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;