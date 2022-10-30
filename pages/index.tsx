import axios from 'axios'
import { NextPage } from 'next'
import { Video } from '../types'

interface IProps {
  videos: Video[]
}

const Home = ({ videos }: IProps) => {
  console.log(videos);

  return (
    <h1 className="text-3xl font-bold underline">
      TikTik
    </h1>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data
    }
  }
}

export default Home
