import { Avatar, Box, Wrap, WrapItem } from '@chakra-ui/react'
import { APICALLER } from '../../Services/api'
//import { useRouter } from 'next/router'

const Category = ({ data }) => {
  
  //const {query} = useRouter()

  return <Box mt="10">
    <Wrap>
    {data.map((e,i)=>(
      <WrapItem key={i}>
        <Avatar name={e.title} size='2xl' src={e.thumbnail} />
      </WrapItem>
    ))}
    </Wrap>
    </Box>
}

export async function getServerSideProps({query:{category}}) {
  
  let res = await APICALLER.get({params:`games?category=${category}`})
 
  let data = res.results
  return { props: { data } }
}

export default Category
