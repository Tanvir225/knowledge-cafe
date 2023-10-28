import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 p-4 m-4">
            <h2 className="text-2xl text-[#111] font-bold">Knowledge - Cafe</h2>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;