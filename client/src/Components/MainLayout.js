import { Link } from "react-router-dom"
import Image from "./Image"

function AppLogo(){
    return <div className="logo-container">
       <Image className="logo" src="logo.svg"/>
       {/* <Image className="logo" src={require("./images/logo.jpg")}/> */}
       <Link to="/" style={{textDecoration: 'none'}}>
            <span className="logo-text">Instaclone</span>
        </Link>
    </div>
}

function Header({children}){
    return <header className="app-header">
        <AppLogo />
        <Link to="/post_view/add">
            <Image className="header-right-icon" src="camera.png"/>
        </Link>
    </header>
}

export default function MainLayout({children}){
    return <div className="header-container">
        <Header/>
        <div className="main">
            {children}
        </div>
    </div>
    
}