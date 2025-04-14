function Header(props){
    return(
        <>
    <h1 className="text-cyan-700 text-3xl font-semibold">Hello {props.name}!</h1>
        <p className="text-cyan-800 text-2xl">I will help you to manage your activity...</p>
        </>)
}

export default Header