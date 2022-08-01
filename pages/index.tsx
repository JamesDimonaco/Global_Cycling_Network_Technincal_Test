import Head from 'next/head'
import { useMemo, useState } from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav'

interface Props {
  data: IVideo[]
}
interface IVideo {
  playlist: []
  description: string
  public: boolean
  publishDate: string
  title: string
  topics: []
  urlTitle: string
  __v: number
  _id: string
}

const Home = ({ data }: Props) => {
  const [search, setSearch] = useState("")
  const filteredVideoList = useMemo(() => {
    if (search === "") {
      return data
    } else {
      return data.filter(v => v.title.toLowerCase().includes(search))
    }
  }, [search, data])


  return (
    <div id='main' className="flex flex-col h-screen">
      <Head>
        <title>Global Cycling Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <img src="/header.png" alt="Header" className='object-fit h-full ' />
      </div>
      <main className='flex-1'>

        <Nav />

        <form >
          <label htmlFor="search-videos" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              onChange={(e) => {
                e.preventDefault()
                setSearch(e.target.value)
              }}
              type="search" id="search-videos" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500" placeholder="Search videos" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>

        <h2 className='text-4xl pt-10'>{search === "" ? "Latest" : "Relevant"} Videos</h2>
        {filteredVideoList.map((video) => <Card video={video} />)}


      </main>
      <footer className="w-full h-max">
        <img src="/footer.png" alt="Footer" />
      </footer>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const res = await fetch('https://www.globalcyclingnetwork.com/api/devtask')
  const data = await res.json()

  return {
    props: { data: data },
  }
}