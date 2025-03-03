import Card from '../Components/Card'
import  {posts} from '../data/data'
function page() {
  return (
    <>
      {
        posts.map((e,i)=>(
            <Card blog={e} key={i}/>
        ))
      }
    </>
  )
}

export default page