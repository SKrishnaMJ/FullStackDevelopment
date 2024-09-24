import logo from "../images/logo192.png"

function MainHeader(){
    return(
      <div>
        <img src={logo}></img>
        React Course - TaskOPedia
      </div>
    )}

    const subHeaderStyle = {
        color: "blueviolet",
        backgroundColor: "lightgray",
      };

    function SubHeader(){
      return(
    <p style={subHeaderStyle} className="text-center">This will be an exciting course!</p>
      )}

      
const Header = () => {
    return(<div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
    )}

    export default Header;