import Head from 'next/head'
import Jumbotron from '../component/jumbotron'
import Article from '../component/article'
import Pagination from '../component/pagination'
import Sidebar from '../component/sidebar'
import Layout from '../component/layout'
import Menu from '../data-dumy/menu.json'

export default function Login({ props }) {
  return (
  <Layout LayoutProps = {props.menu}>
      <div className="row">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Login Page
        </h3>

        </div>
        <Sidebar/>
      </div>
  </Layout>
  )
}

Login.getInitialProps = () =>{
  return{
    props : {
      menu : Menu
    }
  }
}
