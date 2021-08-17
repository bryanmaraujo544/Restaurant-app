import { Container } from './styles'
import { NavBar } from 'components/NavBar'
import { unitiesPageData } from 'data/unitiesPageData'
import { Titles } from 'components/Banner/Titles'
const Unities = ({pageData}) => {
    const [data] = pageData
    return (
        <Container>
            <NavBar />
            <Titles 
                title={`Você está na unidade ${data.title}`}
            />
        </Container>
    )
}

export default Unities


export const getStaticProps = ({params}) => {
    const title = params.title;
    const pageData = unitiesPageData.filter(item => title === item.path)
    console.log("pagesData",pageData)
    return {
        props: {
            pageData
        },
        revalidate: 60 * 60 * 24 * 30
    }
}

export const getStaticPaths = () => {
    const paths = unitiesPageData.map(item => {
        return {
            params: {
                title: item.path
            }
        }
    })
    return {
        paths, 
        fallback: false,
    }
}